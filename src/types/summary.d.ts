import { Repository } from './repositories';

export type FrequencySummaryResult = {
  [repoId: string]: FrequencySummaryResultForEachRepo;
};

export type FrequencySummaryResultForEachRepo = {
  [category: string]: string;
};

export interface ReviewerSummary {
  id: number;
  review_summary?: FrequencySummaryResultForEachRepo;
  repo?: Repository;
}
