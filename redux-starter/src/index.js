import configureStore from './store/store';
import {bugAdded, bugRemoved, bugResolved} from './store/bugs';

const store = configureStore();
console.log(store);

store.subscribe(() => {
    console.log('store changed', store.getState());
})

store.dispatch(bugAdded('Bug 1'))

store.dispatch(bugAdded('Bug 2'));
store.dispatch(bugAdded('Bug 3'));
store.dispatch(bugAdded('Bug 4'));
store.dispatch(bugResolved(2));

store.dispatch(bugRemoved(1));

console.log(store.getState());