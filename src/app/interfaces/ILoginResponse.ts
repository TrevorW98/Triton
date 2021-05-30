import { IUser } from './IUser';

export interface ILoginResponse {
    Token: string;
    user: IUser;
}
