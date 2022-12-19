export interface MobilePhone {
  type: 'mobile';
  phone: string;
}

export interface Landline {
  type: 'landline';
  phone: string;
}

export interface Address {
  type: 'address';
  street: string;
  number: string;
  city: string;
  state: string;
  zip: string;
}

export interface Email {
  type: 'email';
  address: string;
}

export type Contact = MobilePhone | Landline | Address | Email;
