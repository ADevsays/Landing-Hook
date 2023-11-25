import Button from "../../Button";
import CardPlanContent from "./CardPlanContent";

interface Props{
    icon: string, 
    name:string, 
    price:string, 
    content:string,
    animateValue:number
}

function CardPlan(props:Props) {
    return (
        <div 
            style={{
                animation: `cardPlanFadeIn ${(props.animateValue * 0.2)/1.2}s forwards`
            }}
            className="w-[340px] bg-primary p-8 rounded-md relative min-h-[370px]">
            <span className="absolute top-[-15px] right-[-10px] text-4xl text-yellow-400">
                <i className={`bi bi-${props.icon}`}></i>
            </span>
            <h3 className="pb-4 text-center text-2xl font-bold border-b border-gray-400" >Paquete <span className="text-terciary">{props.name}</span></h3>
            <h4 className="text-lg py-4 font-bold border-b border-gray-400"><span className="text-gray-400">Desde</span> {props.price}</h4>
            <CardPlanContent content={props.content}/>
            <div className="flex-center">
                <Button className="btn-primary py-2 mt-3 w-full">
                    Comprar
                </Button>
            </div>
        </div>
    );
}

export default CardPlan;