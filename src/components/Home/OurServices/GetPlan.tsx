import { appPlans, consultantsPlans, maintenancePlans } from "../../../consts/plans";
import possibleServices from "../../../consts/possibleServices";
import CardPlan from "./CardPlan";

function GetPlan({ type }: { type: KeyOfServices }) {

    const serviceComponents = {
        [possibleServices.APP]: appPlans,
        [possibleServices.CONSULTANTS]: consultantsPlans,
        [possibleServices.MAINTENANCE]: maintenancePlans,
        default: [],
    };

    return (
        <>
            {serviceComponents[type]?.map((plan, index)=>(
                <CardPlan
                    key={index}
                    animateValue={index + 2}
                    price={plan.price}
                    icon={plan.icon}
                    name={plan.name}
                    content={plan.description}
                />
            )) || serviceComponents.default}
        </>
    );
}

export default GetPlan;