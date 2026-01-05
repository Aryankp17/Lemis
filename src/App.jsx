import React from 'react'
import Searchbar from './components/Searchbar.jsx'
import Tabs from './components/Tabs.jsx'
import SearchResult from './components/SearchResult.jsx'
import Navbar from './components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import Collectionpage from './pages/Collectionpage.jsx'

const App = () => {
  return (
    <div className='bg-black p-0 m-0 min-h-screen w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchResult />} />
        <Route path='/collection' element={<Collectionpage />} />
      </Routes>
    </div>
  )
}

export default App