import BlobHome from '../../../Imgs/WelcomeSection/Blob_Home.svg';

function BlobBg() {
    return (
        <div  style={{backgroundImage:`url(${BlobHome})`,
                backgroundPosition:'48% 120%',
                backgroundRepeat: 'no-repeat',
                backgroundSize:''}}
            className="absolute w-[800px] md:block hidden top-0 right-0 opacity-30 animate-blob"></div>
    );
}

export default BlobBg; 