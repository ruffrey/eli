var request = require("request");

// all callbacks have two args: err and JSON body response

module.exports = exports = function(ApiKey) {
	if(!ApiKey) throw new Error("eli.js is missing ApiKey");
	
	var TestMode = !!arguments[1];
	
	var r = request.defaults({
		timeout: 1000 * 60,
		strictSSL: true
	});
	
	this.coverage = function(opts, cb) {
		var endpoint = "https://gds.eligibleapi.com/v1.1/coverage/all.json";
		
		opts.api_key = ApiKey;
		TestMode && (opts.test = true);
		
		r({
			uri: endpoint,
			method: 'GET',
			qs: opts
		}, EliCallback(cb) );
		
	};
	
	this.demographics = function(opts, cb) {
		var endpoint = "https://gds.eligibleapi.com/v1.1/demographic/all.json";
		
		opts.api_key = ApiKey;
		TestMode && (opts.test = true);
		
		r({
			uri: endpoint,
			method: 'GET',
			qs: opts
			
		}, EliCallback(cb) )
		
	};
	
	this.authorization = function(opts, cb) {
		var endpoint = "https://gds.eligibleapi.com/v1.1/auth/request.json";
		
		opts.api_key = ApiKey;
		TestMode && (opts.test = true);
		
		r({
			uri: endpoint,
			method: 'POST',
			json: opts
			
		}, function(err, res, jsonbody) {
			
			cb(err, jsonbody);
			
		} );
		
	};
	
	this.claim = function(opts, cb) {
		var endpoint = "https://gds.eligibleapi.com/v1.1/claims.json";
		
		opts.api_key = ApiKey;
		TestMode && (opts.test = true);
		
		r({
			uri: endpoint,
			method: 'POST',
			json: opts
			
		}, function(err, res, jsonbody) {
			
			cb(err, jsonbody);
			
		} );
		
	};
	
	this.claimStatus = function(opts, cb) {
		var endpoint = "https://gds.eligibleapi.com/v1.1/payment/status.json";
		
		opts.api_key = ApiKey;
		TestMode && (opts.test = true);
		
		r({
			uri: endpoint,
			method: 'GET',
			qs: opts
			
		}, EliCallback(cb) )
		
	};
	
};


function EliCallback(userCallback){
	return function(err, res, body) {
		
		var res_parsed = body;
		
		try{
			res_parsed = JSON.parse(body)
		}
		catch(er) {	}
		
		userCallback(err, res_parsed);
	};
}
