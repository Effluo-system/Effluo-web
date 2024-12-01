import apiRequestService from '../utils/apiRequestService';

const EFFLUO_NODE_BASE_URL = import.meta.env.VITE_EFFLUO_NODE_BASE_URL;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export const getAccessCode = async () => {
  try {
    const response = await apiRequestService.sendRequest(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
      'get',
      undefined
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAccessToken = async (code: string) => {
  try {
    const response = await apiRequestService.sendRequest(
      `${EFFLUO_NODE_BASE_URL}/auth/access-token`,
      'post',
      undefined,
      undefined,
      undefined,
      {
        code,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUserDetails = async (token: string) => {
  try {
    const response = await apiRequestService.sendRequest(
      `${EFFLUO_NODE_BASE_URL}/auth/user-details`,
      'get',
      token
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
