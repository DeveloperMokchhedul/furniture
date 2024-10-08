import { NavLink, Outlet } from 'react-router-dom';
import { IoBagSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false)
    const navbar = useRef()
    const navItems = [
        { path: "/", label: "Furniture" },
        { path: "/shop", label: "Shop" },
        { path: "/about", label: "About-us" },
        { path: "/contact", label: "Contact" }
    ];

    const handleToggle = () => {
        setIsMenu(!isMenu);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);  // Fixed window.scrollY
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    console.log(isScroll);

    useGSAP(()=>{
        gsap.from(navbar.current, {
            y:-50,
            delay:.5,
            duration:.5
        })
        
    })



    return (
        <>
            <header className={`${isScroll ? "bg-white text-black shadow-lg shadow-black/25" : "bg-transparent text-white"} fixed top-0 left-0 right-0 z-50 transition-colors duration-300 `}>
                <nav ref={navbar} className='container mx-auto flex justify-between font-poppin py-5 px-5'>
                    <div>
                        <NavLink to={"/"}><h1 className='text-bold'>MS46</h1></NavLink>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 transition-all duration-5+00 ease-in-out ${isMenu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} sm:hidden`}>
                        <ul className='flex absolute gap-10 flex-col top-24 left-[45%] transition-all duration-300 ease-in-out'>
                            {
                                navItems.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "text-red-600 font-bold border-b border-slate-600" : "hover:text-red-600"}
                                            to={item.path}
                                            onClick={handleToggle} // To close the menu when a link is clicked
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Desktop Menu (Hidden on small screens) */}
                    <div  className='relative hidden sm:flex'>
                        <ul className='flex gap-10'>
                            {
                                navItems.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "text-red-600 font-bold border-b border-slate-600" : "hover:text-red-600"}
                                            to={item.path}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='relative hidden sm:flex'>
                        <IoBagSharp className='' />
                        <div className='absolute -top-3 left-3'>
                            <p className='w-[20px] h-[20px] bg-red-500 flex items-center justify-center rounded-full'>2</p>
                        </div>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className='sm:hidden z-50'>
                        <FaBars onClick={handleToggle} className='cursor-pointer' />
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Navbar;
