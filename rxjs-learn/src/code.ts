import { Observable } from 'rxjs';

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// Creating an observable
const observable = Observable.create((observer: any) => {
    try {
        observer.next('Value 1');
        // throw new Error('oh no!');
        observer.next('Value 2');

        let count = 3;
        setInterval(() => {
            observer.next(`Value ${count++}`);
        }, 2000);
    } catch(err) {
        observer.error(err);
    }
});

// Subscribing to an observable
var observer = observable.subscribe(
    (x: any) => { addItem(x); },    // the next handler
    (error: any) => { addItem(`There was an error:: ${error}`); },              // the error handler
    () => { addItem('Completed') }  // the completed handler
)

setTimeout(() => {
    observer.unsubscribe();
    addItem('Unsubscribed');
}, 6001);