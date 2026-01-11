// core/time.ts
export function advanceYear(world: World): World {
  world.year++;

  processPopulation(world);
  processPOI(world);
  processTech(world);
  processEvents(world);

  return world;
}
