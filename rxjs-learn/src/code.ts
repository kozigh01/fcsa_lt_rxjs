import { fromEvent } from 'rxjs';

function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    const subscription = observable.subscribe(
        (x: any) => addItem(`x: ${x.x} - y:${x.y}`)
    );
}, 2000);