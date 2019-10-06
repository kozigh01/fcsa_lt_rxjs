// map doc: https://rxjs.dev/api/operators/map

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}

Observable.create((observer: any) => {
    observer.next('Hello World!!');
})
    .pipe(
        map((x: string) => { return x.toUpperCase(); })
    )
    .subscribe((data: string) => {
        addItem(data);
    });
