import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import SearchResultList from '../components/SearchResultList'

export default function Home() {
  return (
    <div className= "container" >
      <Head>
        <title>Entera School Search</title>
      </Head>

      <main>
        <SearchBar />
        <SearchResultList />
      </main>
    </div>
  )
}