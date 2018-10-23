import * as mongoose from 'mongoose'
import { modelBuilder } from '../goosetype-model-builder'
import { MongooseDocument } from '../models/mongoose-document'
import { MongooseModel } from '../models/mongoose-model'
import { composeSchema } from './compose-schema'
import { getModel } from './get-model'

export function composeModel(target: MongooseDocument, schemaOptions?: mongoose.SchemaOptions): MongooseModel {
    const schema = composeSchema(target, schemaOptions)
    const model = mongoose.model(target.constructor.name, schema) as MongooseModel
    const existingModel = getModel(target.constructor)

    if (!existingModel) {
        modelBuilder.models.set(target.constructor, model)
    }
    return getModel(target.constructor)
}
