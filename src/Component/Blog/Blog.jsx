import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog1,blog2, spentTimeClick}) => {
    
    const { id, cover,author_img,author,title,posted_date,reading_time,hashtags } = blog1;

    
    
    return (
        <div className=' mb-4'>
            <img className='w-full' src={cover} alt="" srcSet="" />
            {/* div of all img and title section  */}
            
                <div className='flex justify-between '>
                
                    {/* only img part  */}
                        <div className='flex gap-3'>

                            {/* div of img section and hashtag section  */}
                        <div>
                        <img className='w-16 mt-3 ' src={author_img} alt="" srcSet="" />
                        </div>
                        <div className='mt-3'>
                            <p>{ author}</p>
                            <p>{ posted_date}4 days to go</p>
                        </div>
                        </div>
                        {/* only reding time  */}
                <div className='mr-16 mt-3'>
                    {/* book mark button section  */}
                    
                    <p >{reading_time} min read
                        <button onClick={()=>blog2(blog1)} className='ml-2'><FaBookmark></FaBookmark> </button>
                    </p> 


                    

                        </div>
                        

                
            </div>
            {/* hash tag option  */}
            <p>{ title}</p>
            <p>
                {
                    hashtags.map((item2,idx) => <span key={idx}>
                        <a href=''> #{ item2}</a>
                    </span>)

                }
            </p>
            <button 
            onClick={() =>  spentTimeClick(reading_time,id)}
                className='text-purple-800 underline text-2xl'>Mark as read </button>
                
                



            
            
        </div>
    );
};
Blog.propTypes = {
    blog1: PropTypes.object.isRequired,
    blog2: PropTypes.func.isRequired,
    spentTimeClick:PropTypes.func.isRequired,
    
   
    
}


export default Blog;

