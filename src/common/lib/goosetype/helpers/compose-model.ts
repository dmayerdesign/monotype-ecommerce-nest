import { camelCase } from 'lodash'
import * as mongoose from 'mongoose'
import { MongooseDocument, MongooseDocumentConstructor } from '../models/mongoose-document'
import { MongooseModel } from '../models/mongoose-model'
import { composeSchema } from './compose-schema'

export function composeModel(target: MongooseDocument, schemaOptions?: mongoose.SchemaOptions): MongooseModel {
    const schema = composeSchema(target, schemaOptions)
    const model = mongoose.model(target.constructor.name, schema) as MongooseModel

    if (!(target.constructor as MongooseDocumentConstructor).__model) {
        (target.constructor as MongooseDocumentConstructor).__model = model
    }
    return (target.constructor as MongooseDocumentConstructor).__model
}
