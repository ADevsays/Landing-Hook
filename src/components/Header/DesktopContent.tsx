import navLinks from "../../consts/navLinks";
import SocialMediaMap from "../SocialMediaMap";
import NavLink from "./NavLink";

function DesktopContent() {
    return (
        <div className="hidden md:block">
            {navLinks.map((nav, index) =>
                (<NavLink key={index}  path={nav.path}>{nav.name}</NavLink>)
            )}
            <SocialMediaMap/>
        </div>
    );
}

export default DesktopContent;