interface Props {
    iconName: string,
    path:string
}
function SocialMediaIcon({ iconName, path }: Props) {
    return (
        <a href={path}  target="_blank">
            <span className="text-lg hover:opacity-70 cursor-pointer m-2">
                <i className={`bi bi-${iconName}`}></i>
            </span>
        </a>
    );
}

export default SocialMediaIcon;