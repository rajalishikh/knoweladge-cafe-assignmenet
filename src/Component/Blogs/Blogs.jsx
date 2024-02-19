import { useEffect, useState } from "react";


const Blogs = () => {
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
                blogs.map(item=><Blogs key={item.id} blog={item}></Blogs>)
            }
            
        </div>
    );
};

export default Blogs;