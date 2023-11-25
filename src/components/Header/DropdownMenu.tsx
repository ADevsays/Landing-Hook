import navLinks from '../../consts/navLinks';
import NavLink from './NavLink';
import SocialMediaMap from '../SocialMediaMap';

interface Props{
    menu:boolean
}

function DropDownMenu({menu}:Props) {
    const menuClasses = 'block z-[99] flex-center flex-col absolute border left-[-85px]  h-auto p-2 bg-secondary text-primary rounded-lg font-medium';
    return (
        <div className={menu ? menuClasses : 'hidden'}>
                {
                    navLinks.map((nav, index)=> (
                        <NavLink key={index} path={nav.path} menuClass='border-none'>
                            {nav.name}
                        </NavLink>
                    ))
                }
                <div className='flex'>
                    <SocialMediaMap/>
                </div>
            </div>
    );
}

export default DropDownMenu;