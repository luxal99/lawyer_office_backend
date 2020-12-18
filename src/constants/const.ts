import { User } from '../user/user.entity';
import { UserInfo } from '../user-info/user-info.entity';
import { Client } from '../client/client.entity';
import { Case } from '../case/case.entity';
import { Notification } from '../notification/notification.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';
import { Notes } from '../notes/notes.entity';

export class Constant {
  static LIST_OF_ENTITIES = [
    User,
    UserInfo,
    Client,
    Case,
    Notification,
    Lawsuit,
    Notes,
  ];
  static LAWSUIT_ROUTE = 'lawsuit';
  static CASE_ROUTE = 'case';
  static CLIENT_ROUTE = 'client';
  static NOTES_ROUTE = 'notes';
  static USER_ROUTE = 'user';
  static NOTIFICATION_ROUTE = 'notification';
  static TOKEN_HEADER_NAME = 'auth-token';
  static AC_DENIED_MESSAGE = 'Access Denied';
  static INVALID_TOKEN_MESSAGE = 'Invalid token';


}
