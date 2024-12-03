
import { useEffect, useState } from 'react'
import '/src/css/App.css'
import { motion } from 'framer-motion';
import { Activity, AtSign, Codesandbox, CodesandboxIcon, Coffee, Dribbble, Facebook, Github, Instagram, Twitter } from 'lucide-react'
import NavigationBar from './shares/Navbar';
import { Button } from '@nextui-org/react';
import { FadeInOnScroll } from './shares/MotionSetting';

import { useSpring, animated } from '@react-spring/web';


const HomePage = () => {

    const NamePart = () => {
        const [avatarSrc, setAvatar] = useState(`${import.meta.env.BASE_URL}/image/peep.png`);
        return <>
            <section className="py-10 md:py-16 ">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="text-center">
                        <div className="flex justify-center items-center mb-16 h-56">
                            <motion.img
                                onMouseEnter={() => setAvatar(`${import.meta.env.BASE_URL}/image/home-img.JPG`)}
                                onMouseLeave={() => setAvatar(`${import.meta.env.BASE_URL}/image/peep.png`)}
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

                        <h6 className="font-medium text-foreground text-lg md:text-2xl uppercase mb-8">Le Huy Bach</h6>

                        <h1 className="font-normal text-foreground-50 text-4xl md:text-7xl leading-none mb-8">Backend Developer</h1>

                        <p className="font-normal text-foreground text-md md:text-xl mb-16">I have a passion for software. I enjoy creating tools that make life easier for people.</p>
                        <Button color="primary" >
                            Contact me
                        </Button>
                    </div>

                </div>
            </section>
        </>
    }

    const SkillBox = () => {
        return <>
            <section className="py-10 md:py-16 ">
                <div className="container max-w-screen-xl mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-background-50 px-8 py-10 rounded-md fade-element">
                            <div className="w-20 py-6 flex justify-center bg-background-100 rounded-md mb-4">
                                <Activity />
                            </div>

                            <h4 className="font-medium text-foreground-50 text-lg mb-4">High experience</h4>

                            <p className="font-normal text-forground text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="bg-background-50 px-8 py-10 rounded-md fade-element">
                            <div className="w-20 py-6 flex justify-center bg-background-100 rounded-md mb-4">
                                <Codesandbox />
                            </div>

                            <h4 className="font-medium text-foreground-50 text-lg mb-4">Useful sandboxes</h4>

                            <p className="font-normal text-forground text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="bg-background-50 px-8 py-10 rounded-md fade-element">
                            <div className="w-20 py-6 flex justify-center bg-background-100 rounded-md mb-4">
                                <Coffee className='' />
                            </div>

                            <h4 className="font-medium text-foreground-50 text-lg mb-4">Success side projects</h4>

                            <p className="font-normal text-forground text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
    var linkCss = "w-16 h-16 flex items-center justify-center rounded-full hover:bg-foreground-50 transition ease-in-out duration-500 text-forground hover:text-background-100";
    const Footer = () => {
        return (
            <>
                <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52 fade-element">

                    <div className="container max-w-screen-xl mx-auto px-4">

                        <div className="text-center">
                            <h1 className="font-medium text-foreground text-4xl md:text-5xl mb-5">Testimonial</h1>

                            <p className="font-normal text-foreground-50 text-md md:text-lg mb-20">I’m not currently taking on new client work but feel free to contact me for any <br /> other inquiries.</p>


                            <div className="flex items-center justify-center space-x-8">
                                <a href="#" className={linkCss}>
                                    <Twitter className='text-forground hover:text-background-800 transition ease-in-out duration-500' />
                                </a>

                                <a href="#" className={linkCss}>
                                    <Github className='text-forground hover:text-background-100 transition ease-in-out duration-500' />
                                </a>

                                <a href="#" className={linkCss}>
                                    <Facebook />
                                </a>

                                <a href="#" className={linkCss}>
                                    <Instagram className="text-forground hover:text-background-100 transition ease-in-out duration-500" />
                                </a>

                                <a href="#" className={linkCss}>
                                    <AtSign className='text-forground hover:text-background-100 transition ease-in-out duration-500' />
                                </a>

                            </div>
                        </div>

                    </div>

                </footer>
            </>
        )
    }


    const [{ y }, api] = useSpring(() => ({ y: 0 }));

    const handleScroll = (event) => {
        api.start({ y: window.scrollY, config: { tension: 170, friction: 26 } });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <animated.div className='bg-background'
            style={{
                transform: y.to((scrollY) => `translateY(${-scrollY}px)`),
                willChange: "transform",
            }}
        >
            <NavigationBar />
            <NamePart />
            <Footer />
            <SkillBox />
        </animated.div>
    );

}
export default HomePage;