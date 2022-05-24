import React from 'react';



const Intro = () => {
    return (
        <div className='mb-5 p-5 mx-auto'>
            <h1 className="title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">কাঠ-পেন্সিল</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8 items-center gap-5'>
                <div>
                    <section className="overflow-hidden text-cyan-700">
                        <div className="container px-5 mx-auto lg:px-32">
                            <div className="flex flex-wrap -m-1 md:-m-2">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://ae01.alicdn.com/kf/HTB10bZoOpXXXXasXVXXq6xXFXXXE/Free-Shipping-stationery-series-trigonometric-48-colors-water-wash-watercolor-colored-pen-Art-Markers.jpg_Q90.jpg_.webp" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://i.pinimg.com/564x/12/c3/55/12c3559519e1a69df5880d35b8ef3d44.jpg" />
                                    </div>
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://i.pinimg.com/564x/17/7f/da/177fdaebfd4a4527f0f3744e9fb6b7a1.jpg" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://i.pinimg.com/564x/b1/8c/65/b18c653098c19404b8a10a311f7433dd.jpg" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://i.pinimg.com/564x/fc/0b/80/fc0b8085f0da62b482db86ed11cd33b4.jpg" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://i.pinimg.com/564x/d7/21/7e/d7217ef253aeeff815dd189f8eaa80d9.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <h3 className='secondary-title text-center text-3xl font-semibold text-cyan-900 mb-2'>
                        What we provide?
                    </h3>
                    <p className='description text-center'>
                        As a companion for life, we manufacture high-quality products for writing, drawing and creative design and other stationary items.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;