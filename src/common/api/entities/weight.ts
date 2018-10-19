import { WeightUnit } from '@mte/common/constants/enums/weight-unit'
import { prop, schema, MongooseDocument } from '../../lib/goosetype'

@schema(Weight, { _id: false })
export class Weight extends MongooseDocument {
    @prop() public amount: number
    @prop({ enum: WeightUnit, type: String }) public unitOfMeasurement: WeightUnit
}
