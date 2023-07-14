import Cookies from 'js-cookie';

export const useCookie = () => {
  const token = Cookies.get('accessToken');
  const clearCookie = () => {
    Cookies.remove('accessToken');
  };
  return { accessToken: token, clearCookie };
};
