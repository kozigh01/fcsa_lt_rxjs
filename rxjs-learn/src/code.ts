import { Observable } from 'rxjs';

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Observable.create(function subscribe(observer: any) {
    observer.next('Hey there')
});

observable.subscribe((val: any) => {
    addItem(val);
});