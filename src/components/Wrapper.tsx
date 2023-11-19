import {ReactNode} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface Props{
    children: ReactNode
}
function WrapperHome({children}:Props) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    );
}

export default WrapperHome;