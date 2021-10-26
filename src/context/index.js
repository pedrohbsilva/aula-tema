import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

function AuthProvider({ children }){
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }
    return {};
  });
  async function signIn({ email, password }) {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  };
  function signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setData({});
  };
  function updateUser(user){
      localStorage.setItem('user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    };
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth deve ser utilizado junto com o AuthProvider');
  }
  return context;
}
export { AuthProvider, useAuth };