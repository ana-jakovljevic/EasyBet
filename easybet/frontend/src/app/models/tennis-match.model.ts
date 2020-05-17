export interface TennisMatch {
    _id: string;
    league: string;
    time: string;
    homeTeam: string;
    guestTeam: string;
    odd1: number | string;
    odd2: number | string;
    oddFirstSet1: number | string;
    oddFirstSet2: number | string;
    oddHen1: number | string;
    oddHen2: number | string;
}