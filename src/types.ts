interface PlanInfo{
    type: KeyOfServices | string,  
    state:boolean
};

type KeyOfServices = 'APP' | 'MAINTENANCE' | 'CONSULTANTS';

interface Service {
    service: string, 
    quantity: number | string,
    price: string | number,
}

interface Invoice{
    client: string, 
    date: string,
    payment: string,
    services: Service[], 
    receives: string, 
    email:string,
    description:string
}