import { PullRequest } from './prs';

export interface Review {
  id: string;
  body?: string;
  created_at: string;
  created_by_user_id: string;
  created_by_user_login: string;
  pull_request: PullRequest;
}
