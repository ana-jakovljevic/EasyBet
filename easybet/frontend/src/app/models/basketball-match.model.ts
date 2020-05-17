export interface BasketballMatch {
    _id: string;
    league: string;
    time: string;
    homeTeam: string;
    guestTeam: string;
    odd1: number | string;
    oddX: number | string;
    odd2: number | string;
    odd1X: number | string;
    oddX2: number | string;
    oddWinner1: number | string;
    oddWinner2: number | string;
}