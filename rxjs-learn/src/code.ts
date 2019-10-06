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