import PropTypes from 'prop-types';
const Blog = ({ blog1 }) => {
    
    const { cover,author_img,author,title,posted_date,reading_time,hashtags } = blog1;

    
    
    return (
        <div className=' mb-4'>
            <img width={645} height={450} src={cover} alt="" srcSet="" />
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
                        <div className='mr-16'>
                            <p>{ reading_time} min read </p>

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
                
                



            
            
        </div>
    );
};
Blog.propTypes = {
    blog1: PropTypes.object.isRequired,
    
}


export default Blog;

