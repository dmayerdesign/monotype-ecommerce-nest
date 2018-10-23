import { modelBuilder } from '../goosetype-model-builder'
import { MongooseDocument } from '../models/mongoose-document'
import { MongooseModel } from '../models/mongoose-model'

export function getModel<DocumentType extends Function | typeof MongooseDocument>(documentType: DocumentType): MongooseModel<DocumentType> {
    return modelBuilder.models.get(documentType)
}
