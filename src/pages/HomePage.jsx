
import { useState } from 'react'
import '/src/css/App.css'
import { motion } from 'framer-motion';
import { AtSign, Dribbble, Facebook, Instagram, Twitter } from 'lucide-react'
import viteLogo from '/vite.svg'
import NavigationBar from './shares/Navbar';

const HomePage = () => {
    const NamePart = () => {

        const [avatarSrc, setAvatar] = useState('/image/peep.png');

        return <>
            <section className="py-10 md:py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    {/* <nav classname="flex items-center justify-between mb-40">
                        <img src="/image/navbar-logo.png" alt="logo" />
                        <button classname="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">get my cv</button>
                    </nav> */}

                    <div className="text-center">
                        <div className="flex justify-center items-center mb-16 h-56">
                            <motion.img
                                onMouseEnter={() => setAvatar('/image/home-img.JPG')}
                                onMouseLeave={() => setAvatar('/image/peep.png')}
                                className='rounded-full w-52 object-cover ' src={avatarSrc} alt="Image"
                                initial={{
                                    opacity: 0.5,
                                    width: '13rem',
                                    height: '13rem',
                                    filter: 'blur(4px)', // Start with a blur effect
                                }}
                                animate={{
                                    opacity: 1,
                                    width: '13.5rem',
                                    height: '13.5rem',
                                    filter: 'blur(0px)', // Animate to no blur
                                }}
                                exit={{
                                    opacity: 0,
                                    width: '13rem',
                                    height: '13rem',
                                    filter: 'blur(4px)', // Optionally blur out again on exit
                                }}
                                transition={{ duration: 0.4 }}
                                key={avatarSrc}
                            // The `key` prop is important here for Framer Motion to detect the image change.
                            />

                        </div>

                        <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Le Huy Bach</h6>

                        <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Backend Developer</h1>

                        <p className="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for software. I enjoy creating tools that make life easier for people.</p>

                        <a href="#" className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a>
                    </div>

                </div>
            </section>
        </>
    }

    const SkillBox = () => {
        return <>
            <section className="py-10 md:py-16">
                <div className="container max-w-screen-xl mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                                <i data-feather="activity"></i>
                            </div>

                            <h4 className="font-medium text-gray-700 text-lg mb-4">High experience</h4>

                            <p className="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                                <i data-feather="codesandbox"></i>
                            </div>

                            <h4 className="font-medium text-gray-700 text-lg mb-4">Useful sandboxes</h4>

                            <p className="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                                <i data-feather="coffee"></i>
                            </div>

                            <h4 className="font-medium text-gray-700 text-lg mb-4">Success side projects</h4>

                            <p className="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
    const Footer = () => {
        return (
            <>
                <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

                    <div className="container max-w-screen-xl mx-auto px-4">

                        <div className="text-center">
                            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>

                            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on new client work but feel free to contact me for any <br /> other inquiries.</p>

                            <div className="flex items-center justify-center space-x-8">
                                <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                    <Twitter className='text-gray-500 hover:text-gray-800 transition ease-in-out duration-500' />
                                </a>

                                <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                    <Dribbble className='text-gray-500 hover:text-gray-700 transition ease-in-out duration-500' />
                                </a>

                                <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                    <Facebook className='text-gray-500 hover:text-gray-700 transition ease-in-out duration-500' />
                                </a>

                                <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                    <Instagram className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
                                </a>

                                <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                    <AtSign className='text-gray-500 hover:text-gray-700 transition ease-in-out duration-500' />
                                </a>

                            </div>
                        </div>

                    </div>

                </footer>
            </>
        )
    }
    return (
        <div className='bg-gray-100'>
            <NavigationBar />
            <NamePart />
            <Footer />
            <SkillBox />
        </div>
    );

}
export default HomePage;