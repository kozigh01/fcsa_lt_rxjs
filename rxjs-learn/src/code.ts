// reference doc: https://rxjs.dev/api/index/function/merge

import { Observable, merge } from 'rxjs';

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

const newObs = merge(observable1, observable2);

newObs.subscribe((data: any) => {
    addItem(data);
});