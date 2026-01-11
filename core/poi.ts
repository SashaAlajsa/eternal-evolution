export interface POI {
  id: string;
  type: POIType;
  explored: boolean;
  knowledgeYield: KnowledgeYield;
}

export interface KnowledgeYield {
  survival?: number;
  tools?: number;
  social?: number;
}

