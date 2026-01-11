import { Era } from "./era.js";
import { Population } from "./population.js";
import { POI } from "./poi.js";

export interface World {
  year: number;
  era: Era;
  population: Population;
  poi: POI[];
  log: string[];
}

export function createWorld(): World {
  return {
    year: 0,
    era: Era.STONE,
    population: {
      size: 30,
      health: 80,
      mobility: 70,
      organization: 10,
    },
    poi: [],
    log: ["Мир зародился."],
  };
}
