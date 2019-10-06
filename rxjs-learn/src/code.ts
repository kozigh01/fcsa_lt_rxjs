// from creation operator doc: https://rxjs.dev/api/index/function/from
// pluck doc: https://rxjs.dev/api/operators/pluck

import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';


function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}


from([
    { first: 'Bob', last: 'Marley', age: 65 },
    { first: 'Bobbie', last: 'Dillon', age: 70 },
    { first: 'Bobby', last: 'Barker', age: 150 }
])
    .pipe(
        pluck('last')
    )
    .subscribe((data: any) => {
        addItem(data);
    });