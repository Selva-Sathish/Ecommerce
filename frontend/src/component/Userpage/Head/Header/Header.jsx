import ProfileIcon from '../HeaderIcons/profile';
import CartIcon from '../HeaderIcons/cart';
import SearchIcon from '../HeaderIcons/search';
import ArrowIcon from '../HeaderIcons/arrow';
import WishlistIcon from '../HeaderIcons/wishlist';
import ProfileIcons from '../HeaderIcons/ProfileIcon';
import OrderIcon from '../HeaderIcons/order';
import './Header.css';

function Header(){
    return (
        <div className="flex w-[100vw] h-[10vh]">
        <div className="flex w-full shadow-sm justify-between items-center py-3 px-4">
            <div className='font-bold text-2xl bg-gradient-to-r from-sky-500 to-sky-700 text-transparent bg-clip-text'>
              ECom
            </div>
            
            <div className='h-[2rem] hidden sm:hidden lg:flex bg-sky-100 rounded-[6px] p-1.5'>
              <SearchIcon />
              <input type="text" name="q" placeholder='Search Mobile, Brands..' className='w-full p-2 focus:outline-none bg-transparent' autoComplete='off' />
            </div>
            
            <div className='flex gap-4'>
              <div className='relative'>
                <div id='login' className='flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white hover:rounded-md py-1.5 px-2 '>
                  <ProfileIcon />
                  <span>Login</span>
                  <ArrowIcon />
                </div>
                <div className='absolute w-[150%] shadow-lg hidden hover:block rounded-md' id='submenu'>
                  <ul className='flex flex-col' >
                    <li className='flex items-center gap-2 p-2 hover:bg-slate-50 z-50'> <ProfileIcons /> Profile</li>
                    <li className='flex items-center gap-2 p-2 hover:bg-slate-50 z-50'> <OrderIcon />Orders</li>
                    <li className='flex items-center gap-2 p-2 hover:bg-slate-50 z-50'> <WishlistIcon />Wishlist</li>
                  </ul>
                </div>
              </div>
              <div className='flex gap-2 items-center cursor-pointer' title='cart'>
                <CartIcon /><span className='hidden lg:block sm:hidden'>Cart</span>
              </div>
            </div>
        </div>
    </div>

    )
}

export default Header;