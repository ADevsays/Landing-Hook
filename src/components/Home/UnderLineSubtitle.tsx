import UnderlineSubtitle from '../../Imgs/underline_subtitle.svg';

interface Props{
    className?:string | ''
}

function UnderLineSubtitle({className}:Props) {
    return (
        <div
            style={{
                backgroundImage: `url(${UnderlineSubtitle})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'calc(50% - 7px) -30px',
                backgroundSize: 'contain',
            }}
            className={`w-full h-[140px] ${className}`}
        >
        </div>
    );
}

export default UnderLineSubtitle;