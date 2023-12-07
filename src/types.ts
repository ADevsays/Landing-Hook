interface PlanInfo{
    type: KeyOfServices | string,  
    state:boolean
};

type KeyOfServices = 'APP' | 'MAINTENANCE' | 'CONSULTANTS';

interface Invoice{
    client: string, 
    date: string,
    service: string, 
    quantity: number | string,
    payment: string, 
    price: string | number,
    receives: string, 
    email:string,
    description:string
}