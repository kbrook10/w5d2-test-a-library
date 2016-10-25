// 10.24.2016 Lessons -> Test Driven Development...

//Task Item (): This checks the 'typeOf' data type for the object
//<---------------------------------------------------------->
var expect = chai.expect
chai.should()
var assert = chai.assert

describe('DOM Methods', function(){ // --> The main heading for the testing...
    describe('body', function(){ // --> This describes the focus, e.g. subheading of the testing either function or element, etc...
        it('should have 7 to 10 children', function(){ // --> This is the message and function to run...
            document.body.children.length.should.be.within(7, 10) // --> This targets that specific area to test in the coding...Deeply Nested OBJECT Process --> This conducts a chain...
        })
        it('should have 7 to 10 children', function(){ // --> This is the message and function to run...
            expect(document.body.children.length).to.be.within(7, 10) // --> This targets that specific area to test in the coding...THIS IS MORE COMMON...Everything in between expect() is the expression...'To Be' compares the expect('expression') with the within('expression')
        })
        it('should have 7 to 10 children', function(){ // --> This is the message and function to run...
            assert.isTrue(document.body.children.length >= 7 && document.body.children.length <= 10) // --> This targets that specific area to test in the coding...Assert is a traditional library
        })
    })
})

describe('MoDom Library', function(){ //--> Selects area
    it('md should exist', function(){
        expect(md).to.exist
    })
    describe('one() Function', function(){
        it('should return an object', function(){
            expect(typeof md.one('div')).to.equal('object')
        })
        it('should be the mocha div', function(){
            expect(md.one('div').id).to.equal('mocha')
        })
        it('should be the mocha div', function(){
            expect(md.one('div').id).to.equal('mocha')
        })
    })
    describe('add() Function', function(){
        it('should be 2', function(){
            expect(md.add(1,1)).to.equal(2)
        })
        it('should be 3', function(){
            expect(md.add(1,1,1)).to.equal(3)
        })
        it('should be 5', function(){
            expect(md.add(1,1,1,1,1)).to.equal(5)
        })
    })
})



console.log(expect)
//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->
