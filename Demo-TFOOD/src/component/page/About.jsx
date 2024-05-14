// eslint-disable-next-line no-unused-vars
import React from 'react'
import Pagelayout from '../cpn/Pagelayout'



function About() {
    return (
        <Pagelayout>

            <div className='w-full'>

                {/* component */}
                <div className=" w-full bg-white">
                    <div className=" m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width height />
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* component */}
                    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                    <section className="relative pt-16 bg-blueGray-50">
                        <div className=" mx-auto">
                            <div className="flex flex-wrap items-center">
                                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                                        <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" className="w-full align-middle rounded-t-lg" />
                                        <blockquote className="relative p-8 mb-4">
                                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                                <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current" />
                                            </svg>
                                            <h4 className="text-xl font-bold text-white">
                                                Great for your awesome project
                                            </h4>
                                            <p className="text-md font-light mt-2 text-white">
                                                Putting together a page has never been easier than matching
                                                together pre-made components. From landing pages presentation
                                                to login areas, you can easily customise and built your pages.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-6/12 px-4">
                                            <div className="relative flex flex-col mt-4">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                        <i className="fas fa-sitemap" />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                                                    <p className="mb-4 text-blueGray-500">
                                                        Notus JS comes with a huge number of Fully Coded CSS
                                                        components.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex flex-col min-w-0">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                        <i className="fas fa-drafting-compass" />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">
                                                        JavaScript Components
                                                    </h6>
                                                    <p className="mb-4 text-blueGray-500">
                                                        We also feature many dynamic components for React, NextJS,
                                                        Vue and Angular.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-4">
                                            <div className="relative flex flex-col min-w-0 mt-4">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                        <i className="fas fa-newspaper" />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                                                    <p className="mb-4 text-blueGray-500">
                                                        This extension also comes with 3 sample pages. They are
                                                        fully coded so you can start working instantly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex flex-col min-w-0">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                        <i className="fas fa-file-alt" />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                                    <p className="mb-4 text-blueGray-500">
                                                        Built by developers for developers. You will love how easy
                                                        is to to work with Notus JS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
                            <div className=" mx-auto px-4">
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </section>
                </div>



                {/* component */}
                <section className="bg-white dark:bg-gray-900 ">
                    <div className=" px-6 py-10 mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>
                        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                            <div className="lg:flex">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        How to use sticky note for problem solving
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        How to use sticky note for problem solving
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        Morning routine to boost your mood
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        All the features you want to know
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        Minimal workspace for your inspirations
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2019</span>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        What do you want to know about Blockchane
                                    </a>
                                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Pagelayout>

    )
}

export default About