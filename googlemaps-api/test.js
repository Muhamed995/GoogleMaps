let getGoogleMapData = require('./script.js');
var expect = require('chai').expect;

 it('expect function to return string of location',function(){
     var result = getGoogleMapData(123,123).then((res)=>{
       expect(res).to.be.a('boolean');
     });
 });

it('expect function to return string of location',function(done){
  let result = getGoogleMapData(37.7749,-122.4194).then((res) => {
    expect(res).to.be.an('array');
    done();
  });
 });


  it('expect function to return string of location',function(done){
    getGoogleMapData(37.7749,-122.4194).then((res) => {
     expect(res).to.be.an('array');
     done();
   });
  });
