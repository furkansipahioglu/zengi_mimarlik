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
    // || router.pathname === '/project/[id]/[slug]'
    // || router.pathname === '/project/[id]' 
    useEffect(() => {
        if(router.pathname === '/contact' || router.pathname === '/about' ) {
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
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className={`navbar transition-all py-3 ${navBg}`}>
                <div className="container px-4 mx-auto">
                    <div className="flex items-center justify-between">
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
                    <div className="px-4 my-4">
                        <ul className="flex flex-col items-center justify-center pt-5" style={{fontFamily: 'Raleway',fontWeight:"500"}}>
                            <li className="pb-4"><Link className="text-xl tracking-widest text-black uppercase hover:text-gray-700" href="/">anasayfa</Link></li>
                            <li className="pb-4"><Link className="text-xl tracking-widest text-black uppercase hover:text-gray-700" href="/project">projeler</Link></li>
                            <li className="pb-4"><Link className="text-xl tracking-widest text-black uppercase hover:text-gray-700" href="/about">firma</Link></li>
                            <li className="pb-4"><Link className="text-xl tracking-widest text-black uppercase hover:text-gray-700" href="/contact">iletişim</Link></li>
                            <div className="flex items-center justify-center gap-4">
                            <li className="pr-2 border-r-2 border-black"><Link className="text-sm tracking-widest text-black uppercase hover:text-gray-700" href="/contact">TR</Link></li>
                            <li className="pr-2 border-r-2 border-black"><Link className="text-sm tracking-widest text-black uppercase hover:text-gray-700" href="/contact">EN</Link></li>
                            <li className=""><Link className="text-sm tracking-widest text-black uppercase hover:text-gray-700" href="/contact">IT</Link></li>
                            </div>
                            
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
