import { Observable } from 'rxjs';

function addItem(val: any, outputArea: string = "output1") {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById(outputArea).appendChild(node);
}


// set-up cold observable - data items always produced from inside the observable
const observable_cold = Observable.create((observer: any) => {
    let counter_cold = 1;
    setInterval(() => {
        observer.next(`Observer_cold:: ${counter_cold++}`);
    }, 1000);
});

// set-up 'hot' observable - data items are not produced exclusively inside the observable
let counter_hot = 1;
const hotInterval = setInterval(() => {
    counter_hot++;
}, 1000);
const observable_hot = Observable.create((observer: any) => {
    setInterval(() => {
        observer.next(`Observer_hot:: ${counter_hot}`);
    }, 1000);
});


let observer_cold: any;
let observer_hot: any;
setInterval(() => {
    // reset the output areas
    document.getElementById('output1').innerHTML = '';
    document.getElementById('output2').innerHTML = '';

    // unsubscribe from previous subscriptions
    if(observer_cold) { observer_cold.unsubscribe(); }
    if(observer_hot) { observer_hot.unsubscribe(); }

    //  Cold observable - the values of the stream are produced within the observable, so every subscription gets all the values produced
    observer_cold = observable_cold.subscribe(
        (x: any) => addItem(`Cold Observable: ${x}`)
    );

    // Hot observable - the values are depenent on data external to the observable, so subscription joins an existing stream of data
    observer_hot = observable_hot.subscribe(
        (x: any) => addItem(`Hot Observable: ${x}`, 'output2')
    )
}, 5000);


