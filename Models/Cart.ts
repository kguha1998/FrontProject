// In your interfaces file (e.g., Cart.ts)
export interface CartMain {
    //cartitem?: cartitem[];
    cartdata?: cartdata;
    Product?: Product[]
  }
  
  export interface cartitem {
    products: product[];
  }
  
  export interface product {
    product_id: number;
    quantity: number;
    commodities: number[];
  }
  
  export interface cartdata {
    products: Product[]
    totalDiscount: number
    totalPrice: number
  }
  
  export interface Product {
    product_id: number
    quantity: number
    discount: number
    discountPercentage: string
    discountedPrice: number
  }
  