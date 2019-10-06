// reference doc: https://rxjs.dev/api/index/function/merge

import { Observable, merge, of } from 'rxjs';

function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}


const observable1 = Observable.create((observer: any) => {
    observer.next('Hello');
});

const observable2 = Observable.create((observer: any) => {
    observer.next('World');
});

const observable3 = Observable.create((observer: any) => {
    observer.next('!!');
});

const newObs = merge(observable1, observable2, observable3);

newObs.subscribe((data: any) => {
    addItem(data);
});


// alternate way to do the same thing
merge(
    Observable.create((observer: any) => { observer.next('Hello'); }),
    Observable.create((observer: any) => { observer.next('World'); }),
    Observable.create((observer: any) => { observer.next('!!'); })
).subscribe((data: any) => {
    addItem(data, 'output2');
});

// // another alternate way to do the same thing
// // of doc: https://rxjs.dev/api/index/function/of
// merge(
//     of('Hello'),
//     of('World'),
//     of('!!')
// ).subscribe((data: any) => {
//     addItem(data, 'output2');
// });
