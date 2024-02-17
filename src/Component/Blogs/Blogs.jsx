import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    }, [])
    
    return (
        <div>
            <p>The length of my data { blogs.length}</p>
            
        </div>
    );
};

export default Blogs;