import { model, prop, MongooseDocument, MongooseSchemaOptions } from '../../lib/goosetype'

@model(UsabilityExperience, MongooseSchemaOptions.timestamped)
export class UsabilityExperience extends MongooseDocument {
    @prop() public description: string
}

// Errors.

export class CreateUsabilityExperienceError extends Error { }
export class FindUsabilityExperienceError extends Error { }
export class UpdateUsabilityExperienceError extends Error { }
export class DeleteUsabilityExperienceError extends Error { }
