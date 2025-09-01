import type { User } from "~/types";
import { mockLogin, mockUser } from "~/mocks";
export const useAuth = () => {
  const user = useState('authUser', () => null as User | null);

  const login = async (email: string, password: string, redirect?: string) => {
    const auth = mockLogin(email, password);
    // Simulate an API call for login
    if (auth) {
      user.value = auth;
      if (redirect) await navigateTo(redirect);
      navigateTo(redirect || '/');
      return true;
    }
    return false;
  };

  const logout = () => {
    user.value = null;
  };

  const isAuthenticated = () => {
    return user.value !== null;
  };

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
}