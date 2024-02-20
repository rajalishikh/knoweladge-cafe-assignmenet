import { useState } from 'react';
import './App.css';
import Blogs from './Component/Blogs/Blogs';

import Bookmarks from './Component/Bookmarks/Bookmarks';
import Header from './Component/Header/Header';

function App() {
  const [bookMark, setBookMark] = useState([]);
  console.log(bookMark)

  const BookmarkClick = (blog) => {
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark)
  }
  

  return (
    <>
      <Header></Header>
      <div className='lg:flex justify-between mx-auto max-w-7xl '>
        <Blogs BookmarkClick={BookmarkClick}></Blogs>
        <Bookmarks bookMark={bookMark}></Bookmarks>
        
      </div>
      
      
        
      
    </>
  )
}

export default App
