export interface UserMain {
  user_detail?: userDetail;
  address_list: addressList[];
  single_address?: SingleAddress;
  user_edit?:UserEdit
 
}



export interface userDetail {
  customer_id: number;
  customer_email: string;
  customer_name: string;
  customer_phone: string;
  reset_flag: number;
  status: number;
  token: string;
}
export interface addressList {
  address_id: number;
  house_no: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  pin: number;
  status: number;
  customer_id: number;
}
export interface SingleAddress{
  address_id: number;
  house_no: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  pin: number;
  status: number;
  customer_id: number;
}
export interface UserEdit{
  customer_id: number;
  customer_email: string;
  customer_name: string;
  customer_phone: string;
  reset_flag: number;
  status: number;
}


