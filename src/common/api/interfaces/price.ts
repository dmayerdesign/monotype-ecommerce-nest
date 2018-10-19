import { Currency } from '@mte/common/constants/enums/currency'
import { MongooseDocument } from './mongoose-document'

export interface Price extends MongooseDocument {
    amount: number
    currency: Currency
}
