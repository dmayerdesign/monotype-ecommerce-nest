import { prop, schema, MongooseDocument, Ref } from '../../lib/goosetype'
import { Attribute } from './attribute'

@schema(SimpleAttributeValue)
export class SimpleAttributeValue extends MongooseDocument {
    @prop({ ref: Attribute }) public attribute: Ref<Attribute>
    @prop() public value: any
}
