import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(catchError(handleError));

function handleError(error: HttpErrorResponse) {
  //console.log('Mi error', error);
  const errorResponse =`Error status ${error.status}, message: ${error.message}`;
  return throwError(() => errorResponse);
}
