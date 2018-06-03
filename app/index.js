import {of, interval, fromEvent, from} from 'rxjs'
import {map, filter, take, mergeAll, switchAll, concatAll, switchMap, mergeMap, concatMap, exhaustMap} from 'rxjs/operators'
import * as ConsoleLogHTML from 'console-log-html'

ConsoleLogHTML.connect(document.querySelector('#myULContainer'));

of(1, 2, 3)
    .pipe(
        filter(x => x % 2 === 0),
        map(x => x * 10),
    )




















const numbers$ = interval(100).pipe(take(6))
const strings$ = numbers$.pipe(map(x => `hello${x}`))



















// const higher$ = numbers$
//     .pipe(map(() => of(1, 2)))
//     .subscribe(x => x.subscribe(x => console.log(x)))



const clickTimer$ = fromEvent(document, 'click')
    .pipe(
        map(() => interval(1000)
            .pipe(
                take(7)
            )),
    )

// clickTimer$.subscribe(obs => obs.subscribe(x => console.log(x)))























// (Observable<Observable<number>>) => <Observable<number>

// clickTimer$
//     .pipe(switchAll())
// 	.subscribe(x => console.log(x))

// SwitchAll (previously switch) unsubscribes from previous observable and subscribes to new one













// clickTimer$
//     .pipe(mergeAll())
//     .subscribe(x => console.log(x))

// mergeAll(3) keeps all subscriptions running. Argument says how much concurrent subscriptions are to be kept, later are suspended until previous is completed.



















// clickTimer$
//     .pipe(concatAll())
//     .subscribe(x => console.log(x))

// concatAll = mergeAll(1). After one observable completes it subscribes to other.




















// fromEvent(document, 'click')
//     .pipe(
//         switchMap(() => interval(1000))
//     )
//     .subscribe(x => console.log(x))

// switchMap = map to new observable and switch them





// function fetchPost() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
// }
//
// fromEvent(document, 'click')
//     .pipe(
//         switchMap(click => from(fetchPost()))
//     )
//     .subscribe(x => console.log(x))

















// fromEvent(document, 'click')
//     .pipe(
//         mergeMap(click => from(fetchPost()))
//     )
//     .subscribe(x => console.log(x))


// map first observable values to observables and merge them


















// fromEvent(document, 'click')
//     .pipe(
//         concatMap(click => from(fetchPost()))
//     )
//     .subscribe(x => console.log(x))


// map first observable values to observables and concat them

















// fromEvent(document, 'click')
//     .pipe(
//         exhaustMap(click => from(fetchPost()))
//     )
//     .subscribe(x => console.log(x))

// reverse of switchMap = ignore emissions until first one is completed
