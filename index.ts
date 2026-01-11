import { createWorld } from "./core/world";
import { advanceYear } from "./core/time";

let world = createWorld();

for (let i = 0; i < 150; i++) {
  world = advanceYear(world);
  console.log(`Year ${world.year}: pop=${world.population.size}`);
}
