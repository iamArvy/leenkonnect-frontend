import type { User } from "~/types";

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: '',
  email_verified_at: new Date().toISOString(),
};

export const mockLogin = (email: string, password: string) => {
  if (email === mockUser.email && password === 'password123') {
      return mockUser
    }
    return null;
}