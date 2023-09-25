export interface OrderMain{
    order_list?: orderlist[],  
    order_detail?: orderdetail[] 
}

export interface orderlist {
  order_id: number
  order_code: string
  created_on: string
  address_id: number
  expected_delivery_date: string
  product_id: number
  quantity: number
  product_name: string
}

export interface orderdetail {
  order_id: number
  order_code: string
  created_on: string
  expected_delivery_date: string
  products: Product[]
  address: Address
}

export interface Product {
  product_name: string
  product_id: number
  commodities: Commodity[]
}

export interface Commodity {
  commodity_name: string
  measurement_unit: string
  quantity: number
}

export interface Address {
  house_no: string
  address_line1: string
  address_line2: string
  city: string
  state: string
  country: string
  pin: string
}


  

  
  