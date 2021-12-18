import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks';
import { setInterceptors, setAuthHeader } from 'utils/axios';
import api from 'utils/api';
const tempDatas = [
  {
    id: 1,
    pageTitle: 'Home',
  },
  {
    id: 2,
    type: 'business',
  },
  {
    id: 3,
    type: 'patenting',
  },
  {
    id: 4,
    type: 'licensing',
  },
  {
    id: 5,
    type: 'stream',
  },
  {
    id: 6,
    type: 'residency',
  },
  {
    id: 7,
    type: 'funding',
  },
];
const LoginContext = React.createContext({
  user: null,
  pagesLoading: false,
  datas: [],
  companyId: null,
  getPageData: async () => {},
  login: async (email, password) => {},
  register: async (firstName, lastName, email, password) => {},
  logout: () => {},
  setCompanyId: (id) => {}
});
export { LoginContext };

const LoginContextContainer = (props) => {
  /* eslint-disable-next-line */
  const [accessToken, setAccessToken] = useLocalStorage('access-token', undefined, (token) => setAuthHeader(`Barear ${token}`));
  const [user, setUser] = useLocalStorage('startHubUser', undefined);
  const [companyId, setCompanyId] = useState();
  const [datas, setDatas] = useState(tempDatas);
  const [pagesLoading, setPagesLoading] = useState(false);
  /**
   * @return An error object or `undefined` if suceed
   */

  const getPageData = async () => {
    setPagesLoading(true);
    try{ 
      const result = await api.getPageData();
      if (result.success) {
        setDatas(result.data);
      }
      setPagesLoading(false);
    } catch (err) {
      setPagesLoading(false);
      return err;
    }
  }

  const loginUser = async (email, password) => {
    if (!email || !password) return 'Email or password is empty';
    try{ 
      const result = await api.loginUser({ email, password });
      const token = result.data.data.token.access_token;
      if(token) {
        setAccessToken(token);
        setUser(result.data.data.user);
        return 'Success';
      } else {
        return 'There was a problem with login';
      }
    } catch (err) {
      return err;
    }
  }

  const registerUser = async (firstName, lastName, email, password) => {
    if (!firstName || !lastName || !email || !password) return 'Email or password is empty';
    try{ 
      const result = await api.registerUser({ firstName, lastName, email, password });
      const token = result.data.data.token.access_token;
      if(token) {
        setAccessToken(token);
        setUser(result.data.data.user);
        return 'Success';
      } else {
        return 'There was a problem with login';
      }
    } catch (err) {
      return err;
    }
  }

  const logoutUser = () => {
    setUser(undefined);
    setAccessToken(undefined);
  }

  setInterceptors(logoutUser);

  useEffect(() => {
    getPageData();
  }, [])

  return (
    <LoginContext.Provider
      value={{
        user,
        pagesLoading,
        datas,
        companyId,
        login: loginUser,
        logout: logoutUser,
        register: registerUser,
        getPageData,
        setCompanyId,
      }}
    >
      { props.children }
    </LoginContext.Provider>
  )
}

export default LoginContextContainer;
