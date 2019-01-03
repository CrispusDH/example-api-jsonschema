import { BasicTypes } from './basic-types';

export function checkPropertyType(property: any, type: BasicTypes): void {
  if (property === undefined) {
    throw new Error(`Property ${property} does not exist as expected`);
  }
  if (typeof property !== type) {
    throw new Error(`Property has ${typeof property} type instead of expected ${type}`);
  }
}

export function checkPropertyNotExistent(property: any): void {
  if (property !== undefined) {
    throw new Error(`Property ${property} should not exist as expected`);
  }
}
