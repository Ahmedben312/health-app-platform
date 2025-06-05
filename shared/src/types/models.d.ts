// Database models
declare interface IUser {
  _id: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

declare interface IProduct {
  name: string;
  price: number;
  description?: string;
}
