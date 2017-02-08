const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/Restaurant");

describe.only("Testing calculator POST route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .post("/add")
       .send({"name":"aswini"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         // var result = JSON.parse(res.text);
         (res.text).should.be.equal("Hello aswini","Expected value not matching with response");
         done();
       });

 });
});

describe.only("Testing calculator POST route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .delete("/delete")
       .send({"id":1})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         // var result = JSON.parse(res.text);
         (res.text).should.be.equal("delete 1","Expected value not matching with response");
         done();
       });

 });
});

describe.only("Testing calculator POST route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .patch("/update")
       .send({"id":"1"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         // var result = JSON.parse(res.text);
         (res.text).should.be.equal("updated 1","Expected value not matching with response");
         done();
       });

 });
});
