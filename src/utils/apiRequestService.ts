import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import { generateTraceId } from './generateTraceId';
import { HEADERS } from '../constants/common.constants';

class APIRequestService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();

    this.instance.interceptors.request.use(
      (config) => {
        if (!config.headers) {
          config.headers = {} as AxiosRequestHeaders; // Explicitly type as AxiosRequestHeaders
        }

        config.headers[HEADERS.TRACE_ID_HEADER] = generateTraceId();

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async sendRequest(
    url: string,
    method: string = 'post',
    token: string | undefined,
    headers: Record<string, string> = {},
    params?: Record<string, any>,
    body?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        headers: {
          ...(headers as AxiosRequestHeaders), // Cast headers as AxiosRequestHeaders
          Authorization: `Bearer ${token}`,
          [HEADERS.TRACE_ID_HEADER]: generateTraceId(),
        },
        params,
        data: body,
        signal,
      };

      const response = await this.instance(config);
      return response.data;
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error);
      }
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 403) {
          throw new Error('API not available');
        } else if (error.response?.status === 401) {
          throw new Error('User unauthorized');
        }
      }
      throw error;
    }
  }
}

export default new APIRequestService();
