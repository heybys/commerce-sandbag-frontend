export type ErrorCause = Record<string, any> & { code: string };

export class BusinessError extends Error {
  constructor(message: string, cause?: any) {
    super(message, { cause });
    this.name = 'BusinessError';
  }
}

export type ResponseBody<T> = {
  status: 'SUCCESS' | 'FAIL';
  message: string;
  data?: T;
  cause?: any;
};
