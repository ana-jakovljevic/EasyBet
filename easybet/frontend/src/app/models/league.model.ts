export abstract class LeagueModel {
    protected leagues: string[] = [];

    constructor() {

    }

    public getLeagues() {
        return this.leagues;
    }
}