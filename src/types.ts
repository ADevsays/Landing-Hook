interface PlanInfo{
    type: KeyOfServices | string,  
    state:boolean
};

type KeyOfServices = 'APP' | 'MAINTENANCE' | 'CONSULTANTS';