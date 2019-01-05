export const peopleSchema = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "title": "Person",
    "required": [
      "id",
      "first_name",
      "last_name",
      "job",
      "school"
    ],
    "properties": {
      "id": {
        "type": "integer"
      },
      "first_name": {
        "type": "string"
      },
      "last_name": {
        "type": "string"
      },
      "job": {
        "type": "string"
      },
      "school": {
        "type": "object",
        "required": [
          "country",
          "city",
          "state_zip"
        ],
        "properties": {
          "country": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "state_zip": {
            "type": "string"
          }
        }
      }
    }
  }
};
