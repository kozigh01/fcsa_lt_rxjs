import { Observable, Subject, interval, timer, pipe, from } from 'rxjs';
import { skipUntil, map, take, filter } from 'rxjs/operators';


function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}

function discardOddDoubleEven() {
  return pipe(
    filter((v: number) => !(v % 2)),
    map((v: number) => v + v),
  );
}

from([1,2,3,4,5,6,7,8,9,10])
    .pipe(
        discardOddDoubleEven()
    )
    .subscribe((data: number) => {
        addItem(data);
    });