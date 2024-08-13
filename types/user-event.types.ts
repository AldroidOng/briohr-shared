import { NotificationChannel } from './notification.types';

export interface GetUserRequest {
  username: string;
}

export interface GetUserResponse {
  id: string;
  username: string;
  email: string;
  channel: NotificationChannel[];
  companyName: string;
}
