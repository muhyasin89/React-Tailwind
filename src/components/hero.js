function Hero(){
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                {/* -- content --  */}
                <div className="flex flex-1 flex-col items-center lg:item-start">
                    <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Bookmark Manager
                    </h2>

                    <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
                        load instantly. Try it for free.
                    </p>

                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn btn-purple hover:text-black hover:bg-bookmark-white">
                            Get it On Chrome
                        </button>
                        <button type="button" className="btn btn-white hover:bg-bookmark-purple hover:text-white">
                            Get it on Firefox
                        </button>
                    </div>
                </div>
                {/*-- Image --*/}
                
            </div>
        </section>
    );
}

export default Hero;