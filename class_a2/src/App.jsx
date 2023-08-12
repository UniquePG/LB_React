import { useContext, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'

function App() {

  const { fetchBlogsPosts } = useContext(AppContext);

  useEffect( ()=> {
    fetchBlogsPosts();
  }, [])

  return (
    <div className='flex flex-col gap-y-1 w-full h-full items-center justify-center'>
      <Header />

      <Blogs />

      <Pagination />

    </div>
  )
}

export default App
