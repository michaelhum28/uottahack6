export const load = () => {
    return {
        streams: {leaderboard: fetch("http://localhost:5173/leaderboard")
        .then((r) => r.json())}
    }
}