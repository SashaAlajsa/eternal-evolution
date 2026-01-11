import { World } from "./world.js";

export function advanceYear(world: World): World {
  world.year++;

  // Примитивная демография
  if (world.population.health < 50) {
    world.population.size -= 2;
    world.log.push(`Год ${world.year}: болезни уносят жизни.`);
  } else {
    world.population.size += 1;
  }

  // Минимальная защита от отрицательных значений
  if (world.population.size < 0) world.population.size = 0;

  return world;
}
