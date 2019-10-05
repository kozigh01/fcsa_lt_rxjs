import { Observable } from 'rxjs';

// function addItem(val: any) {
//     const node = document.createElement('li');
//     const textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }
function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}

// Creating an observable
const observable = Observable.create((observer: any) => {
    try {
        let count = 1;
        setInterval(() => {
            observer.next(`Value ${count++}`);
        }, 2000);
    } catch(err) {
        observer.error(err);
    }
});

// Subscribing to an observable
var observer1 = observable.subscribe(
    (x: any) => { addItem(x); },    // the next handler
    (error: any) => { addItem(`There was an error:: ${error}`); },  // the error handler
    () => { addItem('Completed') }  // the completed handler
);

var observer2 = observable.subscribe(
    (x: any) => { addItem(x, 'output2'); },    // the next handler
);

// To allow both subscriptions to be unsubscribed, add second subscription to first as a child subscription
// server.add(observer2);

setTimeout(() => {
    observer1.unsubscribe();
    addItem('Unsubscribed');
}, 6001);