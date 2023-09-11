export interface OrderMain{
    order_list?: orderlist[],  
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

  

  
  