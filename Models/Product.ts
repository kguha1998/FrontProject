export interface ProductListMain {
    product_detail?: ProductDetail[];
    commodity_detail?:chooseItem;
    Store_Product?:storeProduct;
  }
  
  export interface ProductDetail {
    product_id: number;
    product_name:string;
    product_desc:string;
    image_id:string;
    max_allowed_items:number;
    status:string;
    created_on:string;
    created_by:string;
    updated_on:string;
    updated_by:string;
    product_code:string;
  }

  export interface chooseItem {
    product_name: string
    product_desc: string
    max_allowed_items: number
    comodity_item: ComodityItem[]
  }
  
  export interface ComodityItem {
    commodity_type_id: number
    commodity_type_name: string
    allowed_items: number
    commodities: Commodity[]
  }
  
  export interface Commodity {
    commodity_id: number
    commodity_name: string
    quantity: number
    measurement_unit: string
  }

export interface storeProduct{
  products:[{
    quantity:number,
    product_id:number,
    commodities:[]
  }]
    
  }
