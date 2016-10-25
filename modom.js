// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

/*
Questions:
~ What am I doing
~ How am I going to do it
~ Why am I doing it that way
*/
/*
~ Search for element
~ Add class to element
*/

(function(){
    'use strict'
    var one = function(_element = 'body'){
        return document.querySelector(_element);
    }

    var all = function(_element = 'body'){
        return document.querySelectorAll(_element);
    }

    var remove = function(_element = 'body'){
        one(_element).remove();
    }

    // var remove = function(_element){
    //     one(_element).remove()
    //     return window.md // --> This returns the master copy...This allows chaining of functions...
    // }

    var addClass = function(_element , _elementClass){
        one(_element).classList.add(_elementClass);
    }

    var removeClass = function(_element, _elementClass){
        one(_element).classList.remove(_elementClass);
    }
    var hasClass = function(_element, classMatch){
        return one(_element).classList.contains(classMatch);
    }

    var getAttr = function(_element, attr){
        return one(_element).getAttribute(attr);
    }

    var setAttr = function(_element, attr, attrValue){
        one(_element).setAttribute(attr, attrValue);
    }

    var setHTML = function(_element, innerValue){
        one(_element).innerHTML = innerValue;
    }

    var getHTML = function(_element){ // ---> This should return something...
        return one(_element).innerHTML;
    }
    // var ajax = function(url){
    //     fetch(url)
    //         .then(response => response.json())
    //         console.log('did we git here?')
    //         .then(response)
    //     console.log(response)
    // }
    var ajax = function(url, successCallBack){
        fetch(url)
        .then(res => res.json())
        .then(successCallBack) // --> Needs this b/c we don't know when code comes back...
    }

    var getProp = function(selector, property){ // --> This refers to the meta DATA
        return one(selector)[property]; // --> Use [] to treat argument as variable
    }

    var setProp = function(selector, property, value){ // --> This refers to the meta DATA
        one(selector)[property] = value; // --> Use [] to treat argument as variable
    }

    var getValue = function(selector){ // --> These are used for forms
        return one(selector).value;
    }

    var setValue = function(selector, valueInput){  // --> These are used for forms
        one(selector).value = valueInput;
    }
    var flipPage = function(_element, _transformDeg){
        one(_element).style.transform = _transformDeg
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        setValue: setValue,
        flipPage: flipPage,
    };

}())
//<-----------Class Notes 10.25.2016---------------------->
