import { useState, useCallback } from 'react';

export default function useUser() {
  const [user, setUser] = useState(null);

  const updateUser = useCallback((v) => {
    setUser(v);
  }, []);

  return {
    user,
    updateUser,
  };
}
