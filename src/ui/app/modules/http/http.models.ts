import { HttpErrorResponse, HttpEvent } from '@angular/common/http'
import { HttpStatus } from '@mte/common/constants/http-status'

export class SimpleError {
    public message: string
    public status: HttpStatus

    constructor(errorResponse?: HttpErrorResponse | HttpEvent<any>) {
        if (errorResponse) {
            this.message = errorResponse instanceof HttpErrorResponse ? errorResponse.error.message : null
            this.status = (errorResponse as HttpErrorResponse).status
        }
    }
}

export abstract class HttpSettings {
    public httpFlashErrorBlacklist: { endpoint: string, method: string }[]
}
