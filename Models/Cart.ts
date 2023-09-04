export interface CartMain{
    payment_mode?: payment_mode[];
    cart_item?: cart_page[];
}
export interface payment_mode{
    domain_type: string;
}
export interface cart_page{
    product_id: number;
    product_name:string;
    quantity: number;
    product_price: number;
    discount: number;
    discountPercentage: number;
    discountedPrice: number;
    commodity_id: number;
    commodity_name: string;
    unit: string;
    measurement: number;
    totalDiscount: number;
    totalPrice: number;
}