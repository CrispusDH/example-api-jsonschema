## How to run tests
- install all dependencies: `npm i`
- run tests: `npm run test`

## How looks like DB?
Each time the DB generated with new unique data. For this purpose I use `json-server` and
`faker` libraries. You could take a look at `./db` folder. Example of generated DB:
```json
{
  "people": [
    {
      "id": 0,
      "first_name": "Toney",
      "last_name": "Anderson",
      "job": "Direct Security Officer",
      "school": {
        "country": "Guernsey",
        "city": "North Clarissamouth",
        "state_zip": "26910"
      }
    },
    {
      "id": 1,
      "first_name": "Kenna",
      "last_name": "Predovic",
      "job": "Chief Communications Architect",
      "school": {
        "country": "Saint Lucia",
        "city": "Jerdemouth",
        "state_zip": "75847-3489"
      }
    },
    {
      "id": 2,
      "first_name": "Verner",
      "last_name": "Gottlieb",
      "job": "Central Brand Producer",
      "school": {
        "country": "Liechtenstein",
        "city": "East Carolinatown",
        "state_zip": "11190"
      }
    },
...
...
...
    {
      "id": 9,
      "first_name": "Daisha",
      "last_name": "Zieme",
      "job": "Lead Web Specialist",
      "school": {
        "country": "France",
        "city": "South Aurelie",
        "state_zip": "21283-2906"
      }
    }
  ]
}
```
## Models
I create interfaces that cover response's data in `body`. So, when I will work with it I will have autocomplete and general understanding structure of response.
You could find them in the `./models` folder.
## Services
It is a kind of wrapper under requests. Making them more user friendly. So, here:
- group up requests by some logic
- wrap request in human readable methods
You could find it in `./services` folder
## Entities
If your tests will work with Guest user or Registered user or something like this it would be better to create specific **entities**.
Them will implement corresponding models and will have logic that uses some **services**.
