import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookMark }) => {
    return (
        <div className='bg-slate-300 mt-5'>
            <h1 className='text-xl  font-bold  text{rgb(17, 17, 17)}'> The total number of Bookmark: {bookMark.length} </h1>
            {
                bookMark.map(item3=><Bookmark key={item3.id} bookMark2={item3} ></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes = {
    bookMark: PropTypes.array.isRequired,
    
}