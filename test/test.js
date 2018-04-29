var expect = require("chai").expect;
var disemvowel = require("../disemvowel.js");

describe("Disemvowel", function(){
    it("should remove all vowels from lowercase strings", function(){
        expect(disemvowel("this is lowercase")).to.equal("ths s lwrcs");
    });
    it("should remove all vowels from upper strings", function(){
        expect(disemvowel("THIS IS UPPERCASE")).to.equal("THS S PPRCS");
    });
    it("should remove all vowels from mixed strings", function(){
        expect(disemvowel("It's a beautiful day")).to.equal("t's  btfl dy");
    });
    it("should ignore numbers in input strings", function(){
        expect(disemvowel("It's in room 207")).to.equal("t's n rm 207");
    });
});