export interface Trail {
  _id: string;
  img: string;
  name: string;
  difficulty: string;
  description: string;
  price: number;
  mileage: number;
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