import { LengthUnit } from '@mte/common/constants/enums/length-unit'
import { WeightUnit } from '@mte/common/constants/enums/weight-unit'
import { MongooseDocument } from './mongoose-document'

export interface Units extends MongooseDocument {
    weight: WeightUnit
    length: LengthUnit
}
