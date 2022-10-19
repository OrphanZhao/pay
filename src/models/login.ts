import { useCallback, useState } from 'react';

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const signIn = useCallback((v) => {
    setIsLogin(v);
  }, []);

  return {
    isLogin,
    signIn,
  };
}
