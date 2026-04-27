import { Request, Response, NextFunction } from 'express';

export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export const apiResponse = <T>(data: T, message = 'Success') => ({
  success: true, message, data, timestamp: new Date().toISOString(),
});

export const apiError = (message: string, statusCode = 500) => ({
  success: false, message, statusCode, timestamp: new Date().toISOString(),
});
