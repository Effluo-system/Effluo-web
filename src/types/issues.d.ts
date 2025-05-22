import { Repository } from './repositories';

export interface Issue {
  id: string;
  assignee?: string;
  assignees?: string[];
  labels?: string[];
  weight?: number;
  repo?: Repository;
}
