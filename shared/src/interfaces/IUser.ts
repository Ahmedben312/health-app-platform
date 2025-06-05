// User interface with methods
export interface IUser {
  id: string;
  email: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
