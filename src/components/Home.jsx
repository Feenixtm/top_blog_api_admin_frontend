import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='p-4 flex flex-col gap-2 items-center max-w-[375px]'> 
        <h1 className='text-[1.5rem] font-semibold'>Welcome Back Mr. Admin!</h1>
        <div className='flex flex-col items-center'>
            <span>Want to create a new Blog Post?</span>
            <Link className='link' to="/create-blog-post">Click here!</Link>
        </div>
    </div>
  )
}

export default Home