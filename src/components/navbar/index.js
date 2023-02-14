import Link from "next/link";
import Image from "next/image";
import { AiOutlineAlignRight } from "@react-icons/all-files/ai/AiOutlineAlignRight";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function index() {
    // State
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState("/images/logo_w.png");
    const [navBg, setNavBg] = useState("bg-transparent");
    const [toggleIcons, setToggleIcons] = useState("text-white");
    const router = useRouter();


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if(router.pathname === '/contact' || router.pathname === '/about' || router.pathname === '/project' || router.pathname === '/project/[id]' || router.pathname === '/project/[id]/[slug]') {
            setImages("/images/logo.png");
            setNavBg("bg-white");
            setToggleIcons("text-black");
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    setNavBg("bg-white");
                    setImages("/images/logo.png");
                    setToggleIcons("text-dark");
                } else {
                    setImages("/images/logo.png");
                    setNavBg("bg-white");
                    setToggleIcons("text-dark");
                }
            });
    
        } else {
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    setNavBg("bg-white");
                    setImages("/images/logo.png");
                    setToggleIcons("text-black");
                } else {
                    setImages("/images/logo_w.png");
                    setNavBg("bg-transparent");
                    setToggleIcons("text-white");
                }
            });
        }
    

}, []);

  return (
    <>
        <header className="fixed top-0 z-50 left-0 right-0">
            <nav className={`navbar transition-all py-3 ${navBg}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <Image src={images} className="logos" width={100} height={50} />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <AiOutlineAlignRight className={`text-4xl ${toggleIcons} toggle-icons`}/>
                        </button>
                    </div>

                    </div>
                </nav>
                <div className={`fixed top-0 h-screen w-72 bg-white bg-opacity-90 backdrop-blur-lg ease-in duration-300 rounded-tl-3xl p-5 z-50 right-0 ${isOpen ? 'right-0' : 'right-[-500px]' }`}>
                    <div className="my-4 px-4">
                        <ul className="flex flex-col items-center justify-center pt-5">
                            <li className="pb-4"><Link className="text-black hover:text-gray-700 text-xl uppercase tracking-widest" href="/">anasayfa</Link></li>
                            <li className="pb-4"><Link className="text-black hover:text-gray-700 text-xl uppercase tracking-widest" href="/project">projeler</Link></li>
                            <li className="pb-4"><Link className="text-black hover:text-gray-700 text-xl uppercase tracking-widest" href="/about">firma</Link></li>
                            <li className="pb-4"><Link className="text-black hover:text-gray-700 text-xl uppercase tracking-widest" href="/contact">iletişim</Link></li>
                        </ul>

                    </div>
                    <button className="absolute top-0 right-0 mt-5 mr-5 text-2xl text-gray-500" onClick={toggleMenu}>
                        <AiOutlineClose />
                    </button>
                </div>
        </header>

    </>
  );
}
