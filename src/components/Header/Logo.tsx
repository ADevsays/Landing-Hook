import LogoHook from '../../Imgs/Logo HOOK.webp';

function Logo() {
    return (
        <a href="/">
            <span className='flex-center w-100 h-100 gap-0'>
                <img className='h-[55px] w-100 m-0' src={LogoHook} alt="Logo de la empresa de desarrollo de Software Hook"/>
                <span className='font-bold mt-2 text-lg'>HOOK</span>
            </span>
        </a>
    );
}

export default Logo;