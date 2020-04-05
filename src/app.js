
//import Creator  from './pistone/Creator.js';
import  MyComponent  from './my-component/MyComponent.js';





let component = new MyComponent('engine');





/*console.log("Logging creator: " + Creator);

let ce = new CustomHead();
ce.pushMe();
ce.push();

let appPrefix = 'p';
let componentName = 'engine';
let htmlElName = appPrefix + '-' + componentName;

var Engine = document.registerElement(htmlElName);

//document.body.appendChild(new Engine());

let pQueryEl = function(htmlElName){
    return document.querySelectorAll(htmlElName)
};

var elements = pQueryEl(htmlElName);
var scope = {};

console.log('Elements: ', elements);

elements.forEach(function(element) {
    element.innerHTML = '<p>Ciao, ho sostituito l\'HTML con un template</p>';
});
*/


/*

(function() {

    //var Creator = require('./Creator.js');

    import Creator from 'Creator';
    console.log(Creator);

    let appPrefix = 'p';
    let componentName = 'engine';
    let htmlElName = appPrefix + '-' + componentName;

    var Engine = document.registerElement(htmlElName);

    //document.body.appendChild(new Engine());

    let pQueryEl = function(htmlElName){
        return document.querySelectorAll(htmlElName)
    };

    var elements = pQueryEl(htmlElName);
    var scope = {};

    console.log('Elements: ', elements);

    elements.forEach(function(element) {
        element.innerHTML = '<p>Ciao, ho sostituito l\'HTML con un template</p>';
    });

/*

    var elements = document.querySelectorAll('[data-tw-bind]'),
        scope = {};
    elements.forEach(function(element) {
        //execute scope setter
        if(element.type === 'text'|| element.type === 'textarea'){
            var propToBind = element.getAttribute('data-tw-bind');
            addScopeProp(propToBind);
            element.onkeyup = function(){
                scope[propToBind] = element.value;
            }
        };

        //bind prop to elements
        function addScopeProp(prop){
            //add property if needed
            if(!scope.hasOwnProperty(prop)){
                //value to populate with newvalue
                var value;
                Object.defineProperty(scope, prop, {
                    set: function (newValue) {
                        value = newValue;
                        elements.forEach(function(element){
                            //change value to binded elements
                            if(element.getAttribute('data-tw-bind') === prop){
                                if(element.type && (element.type === 'text' ||
                                    element.type === 'textarea')){
                                    element.value = newValue;
                                }
                                else if(!element.type){
                                    element.innerHTML = newValue;
                                }
                            }
                        });
                    },
                    get: function(){
                        return value;
                    },
                    enumerable: true
                });
            }
        }
    });

    log = function() {
        Object.keys(scope).forEach(function(key){
            console.log(key + ': ' + scope[key]);
        });
    }

    changeNameByCode = function() {
        scope.name = 'name Changed by Code';
    }

    changeSurnameByCode = function() {
        scope.surname = 'surname Changed by Code';
    }
*
})();
*/