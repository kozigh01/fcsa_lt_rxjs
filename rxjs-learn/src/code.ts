// interval creation operator doc: https://rxjs.dev/api/index/function/interval
// timer creation operator doc: https://rxjs.dev/api/index/function/timer
// skipUntil doc: https://rxjs.dev/api/operators/skipUntil
// map doc: https://rxjs.dev/api/operators/map
// take doc: https://rxjs.dev/api/operators/take


import { Observable, Subject, interval, timer } from 'rxjs';
import { skipUntil, map, take, takeUntil } from 'rxjs/operators';


function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}


const observable1 = Observable.create((data: any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});
// alternate definition
// const observable1 = interval(1000).pipe( map((data: number) => data + 1) );


const observable2 = new Subject();
setTimeout(() => {
    observable2.next('stop');
}, 4000);
// alternate definition
// const observable2 = timer(4000, 1000).pipe( take(1) );


observable1
    .pipe( 
        skipUntil(observable2),
        take(5)
    )
    .subscribe((data: any) => {
        addItem(data);
    });


    observable1
    .pipe( 
        takeUntil(observable2)
    )
    .subscribe((data: any) => {
        addItem(data, 'output2');
    });