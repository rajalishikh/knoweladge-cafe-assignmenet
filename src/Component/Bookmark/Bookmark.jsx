import PropTypes from 'prop-types';
const Bookmark = ({ bookMark2 }) => {
    const { title } = bookMark2;

    return (
        <div className='bg-white p-3 m-3'>
            
            <p>{ title}</p>
            
        </div>
    );
};

export default Bookmark;
Bookmark.propTypes = {
bookMark2:PropTypes.object.isRequired
}