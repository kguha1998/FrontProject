export interface ProductListMain {
    product_detail?: ProductDetail[];
  }
  
  export interface ProductDetail {
    commodity_type_id:number;
    commodity_type_name:string;
    allowed_items:number;
    commodities: commodities[];
  }
  export interface commodities {
    commodity_id:number;
    commodity_name:string;
    quantity:number;
    measurement_unit:string;
  }