# OctoMock
GitHub Actions testing requires mocking a number of libraries and contexts to truly isolate your tests. 
This library is intented to simplify that process so you can get to testing your actions quickly, without having to learn the ins and outs of Jest mocking.  

## Usage 

There are a couple steps needed to use the libary currently
* Install the library
 ```$ npm install --save-dev https://github.com/Chocrates/octomock.git```
 
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
    expect(octomock.mockFunctions.getContents).toHaveBeenCalledTimes(1);
    })
  })
```


Changing the output of a mocked function:

```javascript
//main.test.js

let contents = { test: "data" }
octomock.mockFunctions.getContents.mockReturnValue({
  return {
    data: {
      content: Buffer.from(JSON.stringify(contents)).toString("base64") 
    }
  }
})
```

Finally, setting up the inputs into the actions is easy:  

```javascript
//main.test.js

beforeEach(() => {
  let coreImpl = octomock.getCoreImplementation()
  coreImpl.getInput = jest.fn()
    .mockReturnValueOnce('First Input')
    .mockReturnValueOnce("Second Input")
  octomock.updateCoreImplementation(coreImpl)
}
```

For complete test samples you can go look at [add_invite_user](https://github.com/froi/add_invite_user)
