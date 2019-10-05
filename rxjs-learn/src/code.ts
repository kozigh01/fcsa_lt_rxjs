import { Observable } from 'rxjs';

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// Creating an observable
const observable2 = Observable.create((observer: any) => {
    observer.next('Value 1');
    observer.next('Value 2');
    observer.complete();
    observer.next('Value 3');  // not sent, because 'next' after the complete has been called on the observer
});

// Subscribing to an observable
var observer = observable2.subscribe(
    (x: any) => { addItem(x); },    // the next handler
    () => { addItem('Completed') }  // the completed handler
)
