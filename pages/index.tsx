import Head from 'next/head'
import { useEffect, useState } from 'react'
import { SchoolCardProps } from '../components/SchoolCard'
import SearchBar from '../components/SearchBar'
import SearchResultList from '../components/SearchResultList'
import { eventEmitter } from '../lib/event'

export default function App() {
  const [searchResult, setSearchResults] = useState<SchoolCardProps[]>([]);
  const [searchMetadata, setSearchMetadata] = useState<Record<string, number>>({});

  useEffect(() => {
    eventEmitter.on('searchChange', (query) => {
      fetch(`/api/search?q=${query}`)
      .then(response => response.json())
      .then(response => {
        setSearchResults(response.results)
        setSearchMetadata(response.metadata);
      });
    });
  });
  
  return (
    <div className= "container" >
      <Head>
        <title>Entera School Search</title>
      </Head>

      <main>
        <SearchBar />
        <SearchResultList schools={searchResult}/>
      </main>
    </div>
  )
}