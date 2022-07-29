import React,
{
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


type User = {
  username: string;
}

type AuthContextData = {
  user: User | null;
  loading: boolean;
  signIn: (username: any) => Promise<void>;
  singOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn(username: any) {
    try {
      setLoading(true);
      await AsyncStorage.setItem('userName', JSON.stringify(username));
      setUser(username);

    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function singOut() {
    setUser({} as User);
    await AsyncStorage.removeItem('userName');
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem('userName');

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      singOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}