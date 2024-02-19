import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmarks/Bookmark'
import Header from './Component/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='lg:flex justify-between  mt-6 m-16'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
      
      
        
      
    </>
  )
}

export default App
