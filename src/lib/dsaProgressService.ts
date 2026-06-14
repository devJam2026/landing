import { IDsaProgressService } from "./dsaProgressTypes";
import { dsaLocalProgress } from "./dsaLocalProgress";

// Currently backed by localStorage. 
// Swap to a database sync implementation here (e.g. dsaDbProgressService) for Phase 3 DB integration.
export const dsaProgressService: IDsaProgressService = dsaLocalProgress;
