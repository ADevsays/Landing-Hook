import BlobHome from '../../Imgs/Blob_Home.svg';

function BlobBg() {
    return (
        <div  style={{backgroundImage:`url(${BlobHome})`,
                backgroundPosition:'100px 120%',
                backgroundRepeat: 'no-repeat'}}
            className="absolute w-full h-screen top-0 left-0 opacity-30"></div>
    );
}

export default BlobBg; 