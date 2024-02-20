import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ BookmarkClick}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    }, [])
    
    return (
        <div className="lg:w-2/3">
            The total length {blogs.length}
            {
                blogs.map(item=><Blog  key={item.id} blog1={item} blog2={BookmarkClick} ></Blog>)
            }
            
            
        </div>
    );
};
Blogs.propTypes = {
    BookmarkClick:PropTypes.func.isRequired,
}

export default Blogs;
