export interface ProductItemT {
  id: string;
  name: string;
  author: string;
  description: string;
  price: number;
}

export interface CartItemT {
  id: string;
  name: string;
  price: number;
  count: number;
  author: string;
  description: string;
}

export enum CartOperationT {
  increase = "increase",
  descrease = "decrease",
}
