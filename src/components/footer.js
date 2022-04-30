import LogoBookMarkWhite from "../imgs/logo-bookmark-white.png";

function Footer(){
    return (
        <footer className="bg-bookmark-blue py-8">
            <div className="container flex flex-col md:flex-row item-center">
                <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                    <img src={LogoBookMarkWhite} alt="" />
                    <ul className="flex text-white uppercase gap-12 text-xs">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="flex gap-10 mt-12 md:mt-0">
                    <li className="list-none"><i className="fa-brands fa-twitter text-white text-2xl"></i></li>
                    <li className="list-none"><i className="fa-brands fa-facebook-square text-white text-2xl"></i></li>
                </div>
            </div>
        </footer>
    );
}


export default Footer;