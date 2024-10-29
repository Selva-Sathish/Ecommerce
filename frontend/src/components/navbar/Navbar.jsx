import './Navbar.css'
import Logo from '../../assets/headerlogo.svg'
import Arrow from '../../assets/arrow.svg'
import Cart from '../../assets/cart.svg'
function Navbar(){
    return (
        <header className='navbar'>
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className='searchbar'>
                <form action="/search" method='GET' className='flex search'>
                    <div>
                        <button type="button" id='searchbutton' className='h-full'>
                            <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='searchinput w-full'>
                        <input type="text" name='q' autoComplete='off' id='q' placeholder='Search for Products,Brands and More'/>
                    </div>
                </form>
            </div>
            <div className='flex rheader'>
                <div className='profile'>
                    <div className='proicon flex'>
                        <a href="#" className='apro'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="proicons">
                            <g clip-path="url(#clip0_11829_87876)">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.98047 18.6904C6.54476 17.5789 7.40581 16.6454 8.46816 15.9933C9.53052 15.3413 10.7527 14.9961 11.9992 14.9961C13.2457 14.9961 14.4679 15.3413 15.5303 15.9933C16.5926 16.6454 17.4537 17.5789 18.018 18.6904" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_11829_87876">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <span className='login'>Login</span>
                        </a>
                        <img src={Arrow} alt="drop" srcset="" style={{marginLeft: '.5em'}} className='arrow' />
                    </div>
                </div>
                <div className='cart' title='cart'>
                    <div className='incart'>
                        <a href="#">
                            <img src={Cart} alt="cart" srcset="" />
                        </a>
                        <a href="#" style={{marginLeft: '.3em'}}>Cart</a>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar;