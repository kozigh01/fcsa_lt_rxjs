import { Subject } from 'rxjs';

function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}

// subject is an observer that can also function as an observable (so, can emit values)
const subject = new Subject();

subject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(`Observer 1 Error:: ${err}`),
    () => addItem(`Observer 1 completed`)
);

subject.next('Value 1');

var observer2 = subject.subscribe(
    data => addItem(`Observer 2:: ${data}`, 'output2'),
    err => addItem(`Observer 2 Error:: ${err}`, 'output2'),
    () => addItem(`Observer 2 completed`, 'output2')
)

subject.next('Value 2');
subject.next('Value 3');

observer2.unsubscribe();

subject.next('Value 4');

subject.complete();
subject.next('Value 5');