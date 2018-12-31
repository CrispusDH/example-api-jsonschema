## What purpose of this repository
It is base template for API testing
## How to run
Run `test` script: `npm run test`. Other useful scripts you could find in `package.json` file
## Extended `package.json` examples
If you need before and after hook you can create `before-tests-hook` and `after-tests-hook` in the `scripts` folder
and run it using `package.json`:
```
    "hook:before": "node dist/scripts/before-tests-hook.js",
    "hook:after": "node dist/scripts/after-tests-hook.js",
    "pretest": "npm run build && npm run hook:before",
    "test": "npm run ava && npm run aftertest || npm run aftertest",
    "aftertest": "npm run hook:after && npm run clean",
```
