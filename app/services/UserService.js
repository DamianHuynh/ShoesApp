import BaseService from './BaseService';

const PREFIX = 'Users';
export class UserServices extends BaseService {
  userLogin(data) {
    return this.post(`/${PREFIX}/signin`, data);
  }
}

export const userServices = new UserServices();
