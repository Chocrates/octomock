# OctoMock
GitHub Actions testing requires mocking a number of libraries and contexts to truly isolate your tests. 
This library is intented to simplify that process so you can get to testing your actions quickly, without having to learn the ins and outs of Jest mocking.  

## Usage 

There are a couple steps needed to use the libary currently
* Install the library
 ```$ npm install --save-dev octomock```
 
 * Create a Jest setup file:
 
```javascript
//setupJest.js
const { octomock } = require("octomock");
global.octomock = new octomock();
global.octomock.setup();
```
 
* Add the setup file to the Jest config in `package.json`

```javascript
"jest": {
  "automock": false,
  "setupFilesAfterEnv": [
    "./setupJest.js"
  ],
  "testEnvironment": "node"
}
```

### Typescript
We bundle the type definition for Typescript with the library.  Setup for typescript is a bit different than Javascript
* Create the Jest Setup File

```typescript
//setupJest.ts
import { octomock as om } from 'octomock';
(global as any).octomock = new om();
(global as any).octomock.setup();
```
* Add setup Types file
 
```typescript
//setupJest.d.ts
declare var octomock: any;
```

* Add types to tsconfig

```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "strict": true
  },
  "files": ["./setupJest.d.ts"]
}
```

* Add the setup file to the Jest config
```javascript
// jest.config.js
module.exports = {
    clearMocks: true,
    moduleFileExtensions: [ 'js', 'ts' ],
    testEnvironment: 'node',
    testMatch: [ '**/*.test.ts'],
    testRunner: 'jest-circus/runner',
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    verbose: true,
    setupFilesAfterEnv: [
        './setupJest.ts'
    ]
}
```
*Note*: I am not so good with Typescript.  If anybody has any improvements to the docs or the code so the module is a better member of the community, PR's would be greatly appreciated

## Examples
Mocking is setup in the Jest setup file.  It will add the `octomock` instance to the global variables for you to use in your tests
A simple mock and assert utizilizing the library:

```javascript
// main.js
async function main() {
  const octokit = new github.GitHub(process.env.ADMIN_TOKEN);
  const contents = await octokit.repos.getContents({'owner', 'repo'. 'path'})
}

module.exports = { main }
```

```javascript
//main.test.js

describe("Main", () => {
  it("Calls getContents once", async () => {
    await main.main();
    expect(octomock.mockFunctions.repos.getContents).toHaveBeenCalledTimes(1);
    })
  })
```


Changing the output of a mocked function:

```javascript
//main.test.js

let contents = { test: "data" }
octomock.mockFunctions.repos.getContents.mockReturnValue({
  return {
    data: {
      content: Buffer.from(JSON.stringify(contents)).toString("base64") 
    }
  }
})
```

Setting up the inputs into the actions is easy:  

```javascript
//main.test.js

beforeEach(() => {
  octomock.resetMocks() // Resets all mock functions
  let coreImpl = octomock.getCoreImplementation()
  coreImpl.getInput = jest.fn()
    .mockReturnValueOnce('First Input')
    .mockReturnValueOnce("Second Input")
  octomock.updateCoreImplementation(coreImpl)
}
```

Specify which type of context you would like to load:  
```javascript
//main.test.js

beforeEach(() => {
  octomock.resetMocks() // Resets all mock functions
  octomock.loadIssueLabeledContext({
    issueBody: "I am an issue body!",
    issueNumber: 1
  })
}
```

Currently we have fixtures for:  
* Issue Comments
* Issue Created
* Issue Labeled
* Label events
* Push events


Load a custom context from within your project:

```javascript
//main.test.js

beforeEach(() => {
  octomock.resetMocks() // Resets all mock functions
  octomock.loadFixture('__tests__/fixtures/context.json')
}
```

For complete test samples you can go look at [add_invite_user](https://github.com/froi/add_invite_user)
