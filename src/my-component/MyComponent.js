import Engine from '../pistone/Engine.js';

import html from './MyComponent.html';

export default class MyComponent extends Engine {

    constructor (name) {
        super(name);
    };

    push(){

        console.log('Pushing...');
    };


}