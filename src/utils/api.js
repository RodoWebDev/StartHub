import instance, { setAuthHeader } from './axios';
const baseUrl = process.env.REACT_APP_URL;

const api = {
  getPageData: async () => {
    const result = await instance.get(`${baseUrl}/cms/pages/`);
    if (result.data.data && result.data.data.success) {
      return result.data.data;
    } else {
      return {
        success: false,
        message: result.data.data.message
      };
    }
  },
  loginUser: async (user_data) => {
    const result = await instance.post(`${baseUrl}/auth/admin/login`, {
      email: user_data.email,
      password: user_data.password
    })
    const data = result.data.data;
    if (data && data.token.access_token !== undefined) {
      setAuthHeader(`Bearer ${data.token.access_token}`)
      // track('Successful login')
    } else {
      // track('Unsuccessful login');
    }
    return result;
  },
  registerUser: async (user_data) => {
    const result = await instance.post(`${baseUrl}/auth/admin/register`, {
      firstName: user_data.firstName,
      lastName: user_data.lastName,
      email: user_data.email,
      password: user_data.password
    })
    const data = result.data.data;
    if (data && data.token.access_token !== undefined) {
      setAuthHeader(`Bearer ${data.token.access_token}`)
    }
    return result;
  },
  sendEmail: async (data) => {
    const result = await instance.post(`${baseUrl}/email`, data)
    if (result.data.data && result.data.data.success) {
      return result.data.data;
    } else {
      return {
        success: false,
        message: result.data.message
      };
    }
  },
  registerCompany: async (data) => {
    const headers = {
      "Content-Type": "form-data"
    };
    const result = await instance.post(`${baseUrl}/register/company`, data, headers)
    if (result.data.data === 'added') {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: result.data.message
      };
    }
  },
}

export default api;
