export interface Stores {
  [storeName: string]: {
    [productName: string]: number;
  };
}
export interface ShoppingList extends Array<string> {}

export interface ProductDetails {
  [productName: string]: any;
}

export interface AvailableProduct {
  [storeName: string]: {
    products: ProductDetails;
    status: boolean;
    totalCompra: number;
  };
}
