import BurgerMenu from "./BurgerMenu";
import DesktopContent from "./DesktopContent";


function Navbar() {

    return (
        <nav className="flex gap-3 items-center">
            <DesktopContent/>
            <BurgerMenu/>
        </nav>
    );
}

export default Navbar;