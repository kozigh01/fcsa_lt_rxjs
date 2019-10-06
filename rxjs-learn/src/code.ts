// Rx Visualizer: https://rxviz.com/examples/custom

// merge example
const { of, merge } = Rx;
const { delay } = RxOperators;
 
merge(
    of('Hello'),
    of('World').pipe( delay(2000) ),
    of('!!').pipe( delay(4000))
);

// map example
const { of, merge } = Rx;
const { delay, map } = RxOperators;
 
merge(
    of('Hello'),
    of('World').pipe( delay(2000) ),
    of('!!').pipe( delay(4000))
)
.pipe(
	map(x => x.toUpperCase())
);


// pluck example
// https://observablehq.com/@btheado/rxjs-inserting-a-delay-between-each-item-of-a-stream
const { from, zip, interval } = Rx;
const { pluck, map } = RxOperators;

const source = from([
    { first: 'Bob', last: 'Marley', age: 65 },
    { first: 'Bobbie', last: 'Dillon', age: 70 },
    { first: 'Bobby', last: 'Barker', age: 150 }
]);

zip(
  interval(1000),
  source
)
	.pipe(
  	map(data => data[1])
  )
	.pipe(
  	pluck('last')
  )