import { arrayProp, prop, schema, MongooseDocument } from '../../lib/goosetype'

@schema(CustomRegion)
export class CustomRegion extends MongooseDocument {
    @prop({ default: true }) public isActive?: boolean
    @prop() public isMetaRegion?: boolean
    @arrayProp({ itemsType: CustomRegion }) public childRegions?: CustomRegion[]
    @prop() public key?: string
    @prop() public className?: string
    @prop() public apiModel?: string
    @prop() public dataProperty?: string
    @prop() public dataArrayProperty?: string
    @prop() public pathToDataArrayPropertyLookupKey?: string
    @prop() public dataArrayPropertyLookupValue?: string
    @prop() public pathToDataPropertyValue?: string
    @prop() public template?: string
}
