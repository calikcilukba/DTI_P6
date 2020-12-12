import BaseService from './baseService';
import API from '../config/rest';

const login = (email, password) => {
  return BaseService.post(API.LOGIN, { email, password });
};

const product = (limit, search) => {
  return BaseService.get(
    API.PRODUCT + '?limit=' + limit + '&offset=0&search=' + search
  );
};

const productId = (id) => {
  return BaseService.get(API.PRODUCT + '/' + id);
};

export default { login, product, productId };
