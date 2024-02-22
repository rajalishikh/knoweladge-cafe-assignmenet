import { useState } from 'react';
import './App.css';
import Blogs from './Component/Blogs/Blogs';

import Bookmarks from './Component/Bookmarks/Bookmarks';
import Header from './Component/Header/Header';

function App() {
  // Declare use state for bookmark tittle 
  const [bookMark, setBookMark] = useState([]);
  // Declare use state for time 
  const [spentTime, setSpentTime] = useState(0);

  console.log(bookMark)
  // handle click for bookmark tittle 

  const BookmarkClick = (blog) => {
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark)
  }
  //  handle click for spent time count  
  const spentTimeClick = (time,id) => {
    console.log("my time", time);
    const newReadingTime = spentTime - time;
    setSpentTime(newReadingTime);
    // remove book mark from the  list 
    console.log('remove the book mark', id)
    const newRemoveBookMark = bookMark.filter(item4 => item4.id !== id);
    setBookMark(newRemoveBookMark)
    


  }

  return (
    <>
      <Header></Header>
      <div className='lg:flex justify-between mx-auto max-w-7xl '>
        <Blogs spentTimeClick={spentTimeClick} BookmarkClick={BookmarkClick}></Blogs>
        <Bookmarks spentTime={spentTime}  bookMark={bookMark}></Bookmarks>
        
      </div>
      
      
        
      
    </>
  )
}

export default App
