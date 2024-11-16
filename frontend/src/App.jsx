import ProfileIcon from './component/HeaderIcons/profile';
import CartIcon from './component/HeaderIcons/cart';
import SearchIcon from './component/HeaderIcons/search';
import ArrowIcon from './component/HeaderIcons/arrow';
import './App.css'

function App() {
  return (
    <div className="flex flex-col">
        <div className="flex h-[10vh] w-full shadow-sm justify-between items-center py-3 px-4">
            <div className='font-bold text-2xl bg-gradient-to-r from-sky-500 to-sky-700 text-transparent bg-clip-text'>
              ECom
            </div>
            
            <div className='w-[30vw] h-[2rem] hidden sm:hidden lg:flex bg-sky-100 rounded-[6px] p-1.5'>
              <SearchIcon />
              <input type="text" name="q" placeholder='Search Mobile, Brands..' className='w-full p-2 focus:outline-none bg-transparent' autoComplete='off' />
            </div>
            
            <div className='flex gap-4'>
              <div id='login' className='flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white hover:rounded-md py-1.5 px-2'>
                <ProfileIcon />
                <span>Login</span>
                <ArrowIcon />
              </div>
              <div className='flex gap-2 items-center cursor-pointer' title='cart'>
                <CartIcon /><span className='hidden lg:block sm:hidden'>Cart</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App
