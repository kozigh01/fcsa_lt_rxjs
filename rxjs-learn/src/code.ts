import { Observable } from 'rxjs/Observable';

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// Creating an observable
const observable2 = Observable.create((observer: any) => {
    try {
        observer.next('Value 1');
        throw new Error('oh no!');
        observer.next('Value 2');
        observer.complete();
        observer.next('Value 3');  // not sent, because 'next' after the complete has been called on the observer
    } catch(err) {
        observer.error(err);
    }
});

// Subscribing to an observable
var observer = observable2.subscribe(
    (x: any) => { addItem(x); },    // the next handler
    (error: any) => { addItem(`There was an error:: ${error}`); },              // the error handler
    () => { addItem('Completed') }  // the completed handler
)
