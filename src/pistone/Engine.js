
import Piston from './Piston';

export default class Engine {

    constructor(name){
        /** 
            [Deprecation] document.registerElement is deprecated and will be removed in M80, around February 2020. Please use window.customElements.define instead. See https://www.chromestatus.com/features/4642138092470272 and https://developers.google.com/web/updates/2019/07/web-components-time-to-upgrade for more details.
        */
        
        document.registerElement('ps-' + name);
        //console.log(template);

        let els = document.querySelectorAll('ps-' + name)

        els.forEach(function(element) {
            element.innerHTML = '<p>Ciao, ho sostituito l\'HTML con un template</p>';
        });

    }

    piston(){

        return new Piston();

    }

}