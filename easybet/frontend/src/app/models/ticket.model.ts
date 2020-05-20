export class TicketMatch {
    constructor(public _id: string,
                public time: string, 
                public homeTeam: string, 
                public guestTeam:string,
                public oddType: string, 
                public oddValue:number) {
    }
}