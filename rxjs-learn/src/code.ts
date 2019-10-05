import { AsyncSubject } from 'rxjs';

function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}

// subject is an observer that can also function as an observable (so, can emit values)
const subject = new AsyncSubject();

const observer1 = subject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(`Observer 1 Error:: ${err}`),
    () => addItem(`Observer 1 completed`)
);

let count = 1;
const int = setInterval(() => subject.next(count++), 100);

setTimeout(() => {
    const observer2 = subject.subscribe(
        data => addItem(`Observer 2:: ${data}`, 'output2')
    );
    subject.complete();
}, 800);

