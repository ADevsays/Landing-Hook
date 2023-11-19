import { useState } from 'react';
import DropDownMenu from './DropdownMenu';

function BurgerMenu() {
    const [menu, setMenu] = useState(false);
    
    const handleMenu = () => {
        setMenu(menu => !menu);
    };

    window.addEventListener('resize', ()=>{
        setMenu(false);
    });

    return (
        <div className='relative'>
            <button
                onClick={handleMenu}
                className="block md:hidden text-4xl hover:opacity-70 cursor-pointer">
                <i className="bi bi-list"></i>
            </button>
            <DropDownMenu menu={menu}/>
        </div>
    );
}

export default BurgerMenu;