import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmarks/Bookmark'
import Header from './Component/Header/Header'

function App() {
  const [bookMark, setBookMark] = useState([]);

  const BookmarkClick = (blog) => {
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark)
  }
  

  return (
    <>
      <Header></Header>
      <div className='lg:flex justify-between mx-auto max-w-7xl '>
        <Blogs BookmarkClick={BookmarkClick}></Blogs>
        <Bookmark></Bookmark>
      </div>
      
      
        
      
    </>
  )
}

export default App
