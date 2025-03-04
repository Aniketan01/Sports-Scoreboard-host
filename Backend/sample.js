import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "2f7adaeb-280a-40cd-85f1-a32ec46661d3" });
const game = await api.nba.getGame(626);
console.log(game)