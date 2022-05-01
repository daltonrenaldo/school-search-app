import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Pagination, { PaginationProps } from '../components/Pagination'
import { SchoolCardProps } from '../components/SchoolCard'
import SearchBar from '../components/SearchBar'
import SearchResultList from '../components/SearchResultList'
import { eventEmitter } from '../lib/event'

export default function App() {
  const [searchQuery, setSeachQuery] = useState<string>('');
  const [searchResult, setSearchResults] = useState<SchoolCardProps[]>([]);
  const [searchMetadata, setSearchMetadata] = useState<PaginationProps>(null);

  const fetchResults = (query, page = 0) => {
    fetch(`/api/search?q=${query}&page=${page}`)
      .then(response => response.json())
      .then(response => {
        setSearchResults(response.results)
        setSearchMetadata(response.metadata);
      });
  }

  useEffect(() => {
    const searchChangeHandler = (query) => {
      setSeachQuery(query);
      fetchResults(query);
    }

    const pageChangeHandler = (page) => {
      fetchResults(searchQuery, page);
    }
    eventEmitter.on('searchChange', searchChangeHandler);
    eventEmitter.on('pageChange', pageChangeHandler);

    return () => {
      eventEmitter.off('pageChange', pageChangeHandler);
      eventEmitter.off('searchChange', searchChangeHandler);
    }
  });
  
  return (
    <div className= "container" >
      <Head>
        <title>Entera School Search</title>
      </Head>

      <main className="m-3">
        <SearchBar />
        <SearchResultList schools={searchResult}/>
        { searchMetadata ? <Pagination {...searchMetadata } />: null }
      </main>
    </div>
  )
}