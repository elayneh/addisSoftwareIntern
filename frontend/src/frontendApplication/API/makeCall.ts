/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderObj, IAPICallConfig } from "./types";
import axios, { AxiosResponse } from "axios";
import APIError from "./APIError";
import { baseErrors } from "./ErrorCodes";
import { API_ROUTE } from "../../utils/constants";

const makeCall = async (config: IAPICallConfig) => {
  try {
    const fullURL = `${API_ROUTE}${config.route}`;
    const header = (config.headers as HeaderObj) || {};
    const response: AxiosResponse = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullURL,
      headers: { ...header },
      responseType: config.responseType || "json",
      onUploadProgress: config.onUploadProgress,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new APIError(response.data?.code, response.data?.message);
    }
  } catch (error: any) {
    if (error?.response) {
      const { response } = error;
      if (error instanceof APIError) throw error;
      else throw new APIError(response.data?.code, response.data?.message);
    }
    throw new APIError(baseErrors.NETWORK);
  }
};

export default makeCall;
