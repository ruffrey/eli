## eli.js for Node

This is an unofficial library for [Eligible API](https://www.eligibleapi.com/), written in Javascript for Node.js.

There is an official library in the works for [client side Javascript](https://github.com/EligibleAPI/tools/wiki/Eligible.js).

## Please Note
Very much in development and NOT ready for production use. Let's work together to get it battle hardened.

## Eligible API Version
[V 1.1](https://www.eligibleapi.com/rest-api-v1-1/coverage-all)

## Usage

```npm install eli```

```javascript
	
	var Eli = require('eli');
	
	
	// for production mode
	var eli = new Eli(YourApiKey);
	
	// for test mode
	var eli = new Eli(YourApiKey, true);
	
	eli
		.coverage({
			api_key: "ksjfas9320",
			
			// lots more data, see official documentation!
			
		}, function(err, body) {
			
			if(err) 
			{
				console.log(err);
				return;
			}
			
			console.log(body);
			
		});
	
	
```

## Methods

- ```coverage```
- ```demographics```
- ```authorization```
- ```claim```
- ```claimStatus```


## Official stuff

- [Eligible api docs](https://www.eligibleapi.com/rest-api-v1-1/coverage-all)
- [member ids and various values for testing](https://github.com/EligibleAPI/tools/wiki/Testing)
- [official repositories](https://github.com/EligibleAPI)
