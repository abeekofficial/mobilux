export interface IProduct {
    id: number;
    title: string;
    brand: string;
    type: string;
    price: string; 
    img: string;
    discount?: string; 
    color?: string; 
    description: string;
  }
 
  
  export interface CartItem {
    product: IProduct;
    qty: number;
  }




export type ICatagory = {
  id : number  ,
  title : string ,
  type : string 
}