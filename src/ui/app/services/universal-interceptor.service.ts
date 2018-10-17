import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'

@Injectable()
export class UniversalInterceptorService implements HttpInterceptor {

  constructor(
    @Optional()
    @Inject('serverUrl')
    protected serverUrl: string
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Do some interceptor stuff here.

    return next.handle(req)
  }
}
