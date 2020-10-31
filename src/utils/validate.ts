import { Schema, ValidationResult } from 'joi';

export function validate(schema: Schema, body: unknown): ValidationResult {
  return schema.validate(body, {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  });
}
