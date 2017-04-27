![Node.js, Mocha, Chai ](https://buddy.works/data/blog/_thumbnails/mocha-chai-cover.png)
# Geometry calculator Node.js

This is a TTD node.js project using Mocha and Chai, testing and calculate circumference and area of geometric shapes.
**Mocha**: is a JavaScript test framework running on [node.js](https://nodejs.org/en/), featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
In this project i have used the assertion library [chai](http://chaijs.com/).

## Installation

**Mocha** and **chai** is available on **npm**.  

**To install it, type:**  

*Install with npm globally:* 

```
$ npm install –-global chai  
$ npm install –-global mocha  

```

*or as a development dependency for your project:*  

```
$ npm install –save-dev mocha  
$ npm install –save-dev chai  

```

## Usage  

In your test code you pick one of the styles you'd like to use - either :  

```
const { assert } = require('chai');  // Using Assert style  
const { expect } = require('chai');  // Using Expect style  
const { should } = require('chai');  // Using Should style 

```

In this project i have used **expect**.  
You can read about the differences between the styles here: [chai difference](http://chaijs.com/guide/styles/#differences)

## Getting Started  
*Type in the cmd:*

```  
1. git clone https://github.com/SoffKub/GeometryCalculator
2. npm install 
3. npm install mocha
4. npm install chai 

```

## Running the test
**The code is constructed based on these criteria:**  
- DRY, SOLID, KISS, TDD

**Other thoughtful design arguments:**
- Pure functions
- Avoid shared state
- Avoid mutating state
- Easy to test

**Run the test with the cmd:**  

```
$ npm run test  

```

## Author
If you have any questions contact; prog.15.sk@outlook.com




