export class FootballModel {
    private static index = 1;
    private id: number;
    constructor(private date: string,
        private leagueName: string,
        private teamHome: string,
        private teamGuest: string,
        private odds: string[]) {
        this.id = FootballModel.index;
        FootballModel.index++;
    }

    public getId() {
        return this.id;
    }
    public getDate() {
        return this.date;
    }
    public getLeagueName() {
        return this.leagueName;
    }
    public getTeamHome() {
        return this.teamHome;
    }
    public getTeamGuest() {
        return this.teamGuest;
    }
    public getOdds() {
        return this.odds;
    }
}