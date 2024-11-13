import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Lightbulb, Moon } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useAppContext();

    const menuItems = [
        "Profile",
        "Dashboard",
        "Help & Feedback",
        "Log Out",
    ];
    const iconVariants = {
        initial: { opacity: 0, y: 20, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -20, scale: 0.8 },
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-background-50/50 backdrop-blur-lg ">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold  text-foreground-50 ">WEBACK</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">

                <NavbarItem>
                    <Link color="foreground" href="#">
                        Works
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        About me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="">

                    <Button isIconOnly aria-label="Like" onClick={() => toggleTheme()}
                        className="dark:bg-foreground dark:text-background-100 bg-foreground text-background-100"
                    >
                        {theme === 'light' ?
                            (
                                <motion.div
                                    key="moon"
                                    variants={iconVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    <Moon />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="lightbulb"
                                    variants={iconVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    <Lightbulb />
                                </motion.div>
                            )
                        }
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-background-50/50 backdrop-blur-lg ">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );

}
export default NavigationBar;