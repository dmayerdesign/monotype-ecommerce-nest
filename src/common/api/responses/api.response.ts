import { HttpStatus } from '@mte/common/constants/http-status'

export class ApiResponse<T> {
    constructor(
        public body: T = {} as T,
        public status: HttpStatus = 200,
    ) {}
}
