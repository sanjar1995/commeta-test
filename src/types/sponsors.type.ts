export interface ISponsor {
  id: number;
  full_name: string;
  phone: string;
  sum: number;
  payment_type: IPaymentType;
  firm: string;
  spent: number;
  created_at: string;
  get_status_display: string;
}

export interface IPaymentType {
  id: number;
  title: string;
}
