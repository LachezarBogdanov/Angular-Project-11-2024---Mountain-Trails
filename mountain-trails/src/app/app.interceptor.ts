import { HttpInterceptorFn } from '@angular/common/http';
import { API_URL } from './constants';
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, API_URL),
      withCredentials: true,
    })
  }
   return next(req);
};
