import type { HttpInterceptorFn } from "@angular/common/http";

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
    console.log({ req });
    return next(req);
};
