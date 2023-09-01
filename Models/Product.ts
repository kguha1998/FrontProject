export interface ProductListMain {
    product_detail?: ProductDetail[];
    commodity_detail?:Commoditydetail[];
    commodities?:Commodities[];
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

  export interface Commoditydetail {
    commodity_type_id: number;
    commodity_type_name: string;
    allowed_items: number;
    
  }

  export interface Commodities {
    commodity_id: number;
    commodity_name: string;
    quantity: number;
    measurement_unit: string;
  }
 