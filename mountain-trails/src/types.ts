export interface Trail {
  _id: string;
  img: string;
  name: string;
  difficulty: string;
  description: string;
  price: number;
  mountain: string;
  mileage: number;
  duration: number;
  type: string;
  owner: string;
  __v: number;
  }


export interface User {
_id: string;
username: string;
email: string;
password: string;
__v: number;
}