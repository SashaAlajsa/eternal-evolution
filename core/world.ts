// core/world.ts
export interface World {
  year: number;
  era: Era;
  population: Population;
  poi: POI[];
  techProgress: TechProgress;
  modifiers: Modifiers;
  log: string[];
}
