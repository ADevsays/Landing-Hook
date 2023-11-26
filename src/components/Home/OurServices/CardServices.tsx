import Button from "../../Button";
import InfoCharacteristics from "./InfoCharacteristics";

interface Props{
    title:string, 
    img: string,
    characteristics: string[],
    animate: boolean,
    handlePlan: (arg0:PlanInfo)=>void
};

function CardServices({title, img, characteristics, animate, handlePlan}:Props) {
    const setPlan=()=>{
        handlePlan({state:true, type: title});
        document.getElementById('planes')
                ?.scrollIntoView({
                    behavior:'smooth',
                    block: 'start',     
                });
    };

    return (
        <div 
            style={{
                backgroundColor: 'rgba(255,255,255,0.06)'
            }}
            className={`flex items-center flex-col min-h-[380px] shadow-lg rounded-lg backdrop-filter backdrop-blur-lg w-[310px] p-5 opacity-0 select-none ${animate ? 'animate-card' : ''}`}>
        <h4 className="min-h-[70px] flex-center text-lg font-bold text-center">
            {title}
        </h4>
            <div className="p-0 m-0 drop-shadow-xl max-w-[200px] transition-transform hover:scale-110">
                <img className="w-full h-full drop-shadow-xl" src={img} alt={title} />
            </div>
            <ul className="font-medium flex flex-col items-start w-full">
                {characteristics.map((characteristic, index)=> (
                    <InfoCharacteristics key={index} info={characteristic}/>
                ))}
            </ul>
            <Button onClick={setPlan} className="btn-primary p-0 w-full mt-3 py-2">Ver Planes</Button>
        </div>
    );
};

export default CardServices;