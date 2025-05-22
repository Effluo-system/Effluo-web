import { Repository } from './repositories';

export interface PullRequest {
  id: string;
  title: string;
  body: string | null;
  assignees: string[];
  assignee: string | null;
  labels: string[] | null;
  number: string;
  created_at: string;
  closed_at: string | null;
  created_by_user_id: string;
  created_by_user_login: string;
  url: string;
  repository: Repository;
}
