import { LengthUnit } from '@mte/common/constants/enums/length-unit'
import { WeightUnit } from '@mte/common/constants/enums/weight-unit'
import { prop, schema, MongooseDocument } from '../../lib/goosetype'

@schema(Units)
export class Units extends MongooseDocument {
    @prop({ enum: WeightUnit }) public weight: WeightUnit
    @prop({ enum: LengthUnit }) public length: LengthUnit
}
