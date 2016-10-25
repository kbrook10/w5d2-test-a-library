// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

//<--------------------This is collection of the Mocha Tests ...-------------------------------->
describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  // one(): Finds one matching element using any CSS selector (**Completed**)
  describe('md.one', function() { // -->Describes the function testing and creates anonymous function...
    it('should return tagName of BODY', function() { // -->Describes results expected and creates anonymous function...
      expect(md.one('body').tagName).to.equal('BODY') // --> Creates test to evaluate CSS selector returns
    })
  })
  //<---------End of Tests---------------->
  // all(): Find all matching elements using any CSS selector (**Completed**)
  describe('md.all', function() {
    it('should return all 14 instances', function() {
      expect(md.all('div').length).to.equal(14)
    })
  })
  //<---------End of Tests---------------->
  // remove(): Remove an element
  describe('md.remove', function() {
    it('should return null value', function() {
      md.remove('.sub-header'); // ->Whenever we modify we need to run code before and then check afterwards...(e.g. Mocking...Testing out prior)...If return value we don't need to mock...If no return value then we need to mock to ensure code was success...
      expect(md.one('.sub-header')).to.be.equal(null)
    })
  })
  //<---------End of Tests---------------->
  // addClass(): Add a CSS class to an element <---Need Help-->
  describe('md.addClass()', function() {
    it('should add a CSS class of TEST to Body', function() {
      md.addClass('body', 'test')
      expect(md.one('body').classList.contains('test')).to.be.true
    })
  })
  //<---------End of Tests---------------->
  // removeClass(): Remove a CSS class from an element (**Completed**)
  describe('md.removeClass()', function(){
    it('should remove a class and return value of FALSE', function(){
      md.removeClass('h2', 'sub-header')
      expect(document.querySelector('h2').classList.contains('sub-header')).to.be.false
    })
  })
  //<---------End of Tests---------------->
  // hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
  describe('md.hasClass()', function(){
    it('should return false if the the element contains a class', function(){
    // md.hasClass('.main h2', 'sub-header')
    expect(md.hasClass('.main h2', 'sub-header')).to.be.false
    })
  })
  //<---------End of Tests---------------->
  // getAttr(): Get an HTML attribute from an element
  describe('md.getAttr()', function(){
    it('should return a value of 200 for the attribue selected', function(){
      md.getAttr('.placeholder > img', 'width')
      expect(md.getAttr('.placeholder > img', 'width')).to.be.equal('200')
    })
  })
  //<---------End of Tests---------------->
  // setAttr(): Set an HTML attribute on an element (Need to test)
  describe('md.setAttr()', function(){
    it('should set the attribute of the selected element to \'some great story\' and be undefined', function(){
      md.setAttr('.main > h1', 'class', 'text-muted')
      expect(md.getAttr('.main > h1', 'class')).to.contain('text-muted')
    })
  })
  //<---------End of Tests---------------->
  // setHTML(): Set the innerHTML of an element
  describe('md.setHTML', function(){
    it('should return Tootsie Roll!', function(){
      md.setHTML('.main h1', 'Tootsie Roll!')
      expect(md.getHTML('.main h1')).to.contain('Tootsie Roll!')
    })
  })
  //<---------End of Tests---------------->
  // getHTML(): Get the innerHTML of an element
  describe('md.getHTML', function(){
    it('should return Tootsie Roll!', function(){
      expect(md.getHTML('.main h1')).to.contain('Tootsie Roll!')
    })
  })
  //<---------End of Tests---------------->
  //Create Test for flipPage() function
  describe('md.flipPage()', function() {
      it('should flip the page upside down', function() {
          md.flipPage('body', 'rotate(180deg)')
          expect(document.body.style.transform).to.equal('rotate(180deg)')
          md.flipPage('body', 'rotate(0deg)')
      })
  })
  // ajax(): Fetch API data
  describe('md.ajax', function(){
    it('should API data', function(JohnnyQuest){
      md.ajax('http://swapi.co/api/', function(){
        console.log('we are getting somthing back')
        JohnnyQuest()
      })
    })
  })
  // Add a setProp() function that sets an element's object property value.
  describe('md.setProp', function(){
    it('should return the value of test', function(){
      md.setProp('.placeholder', 'className' , 'test placeholder')
      expect(md.getProp('.placeholder','className')).to.contain('test')
    })
  })
// Add a getProp() function that gets an element's object property value.
describe('md.getProp', function(){
  it('should return the value of test b/c set above by setProp', function(){
    expect(md.getProp('.placeholder','className')).to.contain('test')
  })
})
// Add a setValue() function that sets an form field's value attribute.
describe('md.setValue()', function(){
  it('should return back value of title', function(){
    md.setValue('body', 'title')
    expect(md.getValue('body')).to.equal('title')
  })
})
// Add a getValue() function that sets an form field's value attribute.
describe('md.getValue()', function(){
  it('should retrieve value of title', function(){
    expect(md.getValue('body')).to.equal('title')
  })
})
})
