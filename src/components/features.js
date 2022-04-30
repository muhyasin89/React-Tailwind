import IllusttrateImage from '../imgs/illustration-features-tab-1.png';
import IllusttrateImage2 from '../imgs/illustration-features-tab-2.png';
import IllusttrateImage3 from '../imgs/illustration-features-tab-3.png';

function Features(){
    return (
        <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
            {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-bookmark-blue">
                    Features
                </h1>
                <p className="text-center text-bookmark-grey mt-4">
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
                    your devices so you can access them on the go.
                </p>
            </div>
            {/* Feature 1 */}
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x24">
                    {/* Images */}
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img src={IllusttrateImage} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                    </div>
                     {/*-- Content --*/}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl text-bookmark-blue lg:ml-10"> Bookmark in One Click</h1>
                        <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full lg:ml-10">
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
              over how you manage your favourite sites.
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black lg:ml-10">
                           More Info
                        </button>
                    </div>
                    {/** Rounded Rectangle **/}
                    <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
                </div>
            </div>
             {/* Feature 2 */}
             <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x24">
                    {/* Images */}
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img src={IllusttrateImage2} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                    </div>
                     {/*-- Content --*/}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl text-bookmark-blue lg:ml-10"> Intelligent search</h1>
                        <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full lg:ml-10">
                        Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
              of your bookmarks.
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black lg:ml-10">
                            More Info
                        </button>
                    </div>
                    {/** Rounded Rectangle **/}
                    <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"></div>
                </div>
            </div>
            {/* Feature 3 */}
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x24">
                    {/* Images */}
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img src={IllusttrateImage3} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                    </div>
                     {/*-- Content --*/}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl text-bookmark-blue lg:ml-10"> Share your bookmarks</h1>
                        <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full lg:ml-10">
                        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.
                        </p>
                        <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black lg:ml-10">
                           More Info
                        </button>
                    </div>
                    {/** Rounded Rectangle **/}
                    <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
                </div>
            </div>
        </section>
    );
}


export default Features;