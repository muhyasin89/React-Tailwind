import logoBookMark from "../imgs/logo-bookmark.svg"

function Home(){
    return (
        <header className="font-Poppins">
            <nav className="container flex item-center py-4 mt-4 sm:mt-12">
                <div className="py-1">
                    <img src={logoBookMark} />
                    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                        <li>Features</li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Home;