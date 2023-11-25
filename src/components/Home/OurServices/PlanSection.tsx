import { useEffect, useState } from "react";
import GetPlan from "./GetPlan";

interface Props{
    plan: PlanInfo
}
function PlanSection({plan}:Props) {
    const [statePlan, setStatePlan] = useState(false);
    const {type, state} = plan;

    useEffect(()=>{
        if(state) setStatePlan(state);
    }, [plan]);

    const closePlan=()=>{
        setStatePlan(false);
    }
    return (
        <section id="planes" className={`${statePlan ? 'animate-plan' : 'animate-close-plan'} relative pt-8 pb-20 border-b border-gray-700`}>
           <h4 className="w-full mt-10 font-bold text-center text-xl">
                {type}
                <br />
                <span className="text-terciary">PLANES</span>
            </h4>
            <button className="text-3xl text-terciary absolute top-[10px] right-[15px]" onClick={closePlan}>
                <span>
                    <i className="bi bi-x-square-fill"></i>
                </span>
           </button>
            <div className="w-full h-full p-12 flex-center gap-8 flex-wrap">
                <GetPlan type={type as KeyOfServices}/>
            </div>
            <p className="text-gray-400 w-full text-center text-sm m-0">Los planes <span className="font-bold text-secondary">NO</span> se pueden <span className="font-bold text-secondary">acumular</span>.</p>
        </section>
    );
}

export default PlanSection;