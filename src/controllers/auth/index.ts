import {verify} from 'jsonwebtoken';
import config from '../../config';

const {JWT_SECRET} = config;

class AuthController {
  public getAuthToken() {
    return window.localStorage.getItem('authToken');
  };

  public setAuthToken(token: string) {
    window.localStorage.setItem('authToken', token)
  };

  public clearAuthToken() {
    window.localStorage.clearItem('authToken');
  };

  public currentToken() {
    const token = this.getAuthToken();
    return token === null
      ? false
      : token;
  };

  public extractUserFromToken(token: any) {
    return verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
    });
  };
};

export default AuthController;
