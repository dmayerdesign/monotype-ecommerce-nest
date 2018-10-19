import { prop, schema, MongooseDocument } from '../../lib/goosetype'
import { Address } from './address'
import { Price } from './price'

@schema(OrganizationRetailSettings)
export class OrganizationRetailSettings extends MongooseDocument {
    @prop() public shippingAddress: Address
    @prop() public billingAddress: Address
    @prop() public salesTaxPercentage: number
    @prop() public addSalesTax?: boolean
    @prop() public shippingFlatRate?: Price
}
