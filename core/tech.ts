export interface Tech {
  id: string;
  era: Era;
  cost: KnowledgeCost;
  unlocked: boolean;
  effect: (world: World) => void;
}

export interface KnowledgeCost {
  survival?: number;
  tools?: number;
  social?: number;
}
