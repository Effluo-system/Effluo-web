export interface User {
  id?: string;
  login?: string;
  avatar_url?: string;
  url?: string;
  email?: string;
}

export interface UserInitialState {
  user?: User;
  getUserLoading: boolean;
}
