import { AxiosProgressEvent, Method, ResponseType } from "axios";

export interface HeaderObj {
  Authorization?: string;
  RFTOKEN?: string;
  "Content-Type"?: string;
  "Content-Encoding"?: string;
}

export interface IAPICallConfig {
  route: string;
  method: Method;
  body?: object | FormData | string;
  query?: object;
  headers?: HeaderObj;
  responseType?: ResponseType;
  dontRefresh?: boolean;
  onUploadProgress?: (event: AxiosProgressEvent) => void;
}
