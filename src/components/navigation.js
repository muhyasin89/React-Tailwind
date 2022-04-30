import logoBookMark from "../imgs/logo-bookmark.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Home(){
    return (
        <header className="font-Poppins">
            <nav className="container flex item-center py-4 mt-4 sm:mt-12">
                <div className="py-1">
                    <img src={logoBookMark} />
                    
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                    <li className="cursor-pointer">Features</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Contact</li>
                    <button type="button" className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </header>
    );
}

export default Home;