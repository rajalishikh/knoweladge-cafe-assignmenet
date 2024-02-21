import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookMark }) => {
    return (
        <div >
            <h1 className=' text-purple-900 bg-blue-200 text-2xl  p-2 mb-6 mt-5 w-full'>Spent time on read</h1>

            <div className='bg-slate-300 mt-5 w-full p-6'  >
           
           <h2 className='text-xl  font-bold  text{rgb(17, 17, 17)}'> The total number of Bookmark: {bookMark.length} </h2>
           {
               bookMark.map(item3=><Bookmark key={item3.id} bookMark2={item3} ></Bookmark>)
           }
           
       </div>
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes = {
    bookMark: PropTypes.array.isRequired,
    
}
