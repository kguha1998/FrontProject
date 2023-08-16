export interface UserMain {
  user_detail?: userDetail;
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
