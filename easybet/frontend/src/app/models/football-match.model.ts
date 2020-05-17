export interface FootballMatch {
    _id: string;
    league: string;
    time: string;
    homeTeam: string;
    guestTeam: string;
    odd1: number | string;
    oddX: number | string;
    odd2: number | string;
    odd1X: number | string;
    odd12: number | string;
    oddX2: number | string;
    odd0to2: number | string;
    odd3plus: number | string;
    odd4plus: number | string;
}