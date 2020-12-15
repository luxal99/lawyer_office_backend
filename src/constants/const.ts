import { User } from '../user/user.entity';
import { UserInfo } from '../user-info/user-info.entity';
import { Client } from '../client/client.entity';
import { Case } from '../case/case.entity';
import { Notification } from '../notification/notification.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';
import { Notes } from '../notes/notes.entity';

export const PORT = process.env.PORT;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const DB_NAME = process.env.DB_NAME;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;

export const LIST_OF_ENTITIES = [
  User,
  UserInfo,
  Client,
  Case,
  Notification,
  Lawsuit,
  Notes,
];
export const LAWSUIT_ROUTE = 'lawsuit';
export const CASE_ROUTE = 'case';
export const CLIENT_ROUTE = 'client';
export const NOTES_ROUTE = 'note';
export const USER_ROUTE = 'user';


export const NOTIFICATION_ROUTE = 'notification';
export const TOKEN_HEADER_NAME = 'auth-token';
export const AC_DENIED_MESSAGE = 'Access Denied';
export const INVALID_TOKEN_MESSAGE = 'Invalid token';
