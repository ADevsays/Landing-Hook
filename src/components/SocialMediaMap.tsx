import socialIcons from "../consts/socialIcons";
import SocialMediaIcon from "./Header/SocialMediaIcon";

function SocialMediaMap() {
    return (
        <>
            {
                socialIcons.map((icon, index) => (
                    <SocialMediaIcon 
                        key={index} 
                        iconName={icon.icon}
                        path={icon.path} />
                ))
            }
        </>
    );
}

export default SocialMediaMap;