import instance from './axios';
const baseUrl = process.env.REACT_APP_URL;

const api = {
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
}

export default api;
