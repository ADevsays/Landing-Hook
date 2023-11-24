import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className='flex-between w-full shadow-lg p-4 z-[100] '>
            <Logo/>
            <Navbar/>
        </header>
    );
}

export default Header;