import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between mx-16 mt-7 border-b-2 font-bold'>
            <h1 className='text-3xl  text-black font-medium'>Knowledge Cafe</h1>
            <img src={ profile} alt="it is profile pic " srcSet="" />

            
            
        </div>
    );
};

export default Header;