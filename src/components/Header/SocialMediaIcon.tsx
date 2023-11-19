interface Props{
    iconName:string,
}
function SocialMediaIcon({iconName}: Props) {
    return (
        <span className="text-lg hover:opacity-70 cursor-pointer m-2">
            <i className={`bi bi-${iconName}`}></i>
        </span>
    );
}

export default SocialMediaIcon;