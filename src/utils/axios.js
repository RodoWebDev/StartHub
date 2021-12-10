import axios from 'axios';

//change to an environment url eventually
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const setAuthHeader = (token) => {
  instance.defaults.headers.common['Authorization'] = token;
}

const setInterceptors = (logoutUser, addToast = () => {}) => {
  instance.interceptors.response.use((response) => {
    if (response.config) console.info(`[AXIOS]:${response.config.method.toUpperCase()}:${response.config.url}`, {config: response.config, data: response.data});
    return { success: true, status: response.status, data: (response || {}).data }
  }, (error) => {
    const resp = error.response || error;
    const data = resp.data || resp;
    console.log('[AXIOS]: Error:', resp);
    if (resp.status === 401) {
      logoutUser();
      addToast('Relogin required!', { appearance: 'info', autoDismiss: true });
      return new Promise(() => {});
    }
    return Promise.reject({ success: false, status: resp.status, data });
  });
}

export { setAuthHeader, setInterceptors };

instance.origin = axios;
export default instance;
