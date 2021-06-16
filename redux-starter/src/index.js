import configureStore from './store/store';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';

const store = configureStore();
console.log(store);

store.subscribe(() => {
    console.log('store changed', store.getState());
})

store.dispatch(bugAdded({ description: 'Bug 1' }))

store.dispatch(bugAdded({ description: 'Bug 2' }));
store.dispatch(bugAdded({ description: 'Bug 3' }));
store.dispatch(bugAdded({ description: 'Bug 4' }));
store.dispatch(bugRemoved({ id: 4 }));
store.dispatch(bugResolved({ id: 1 }));


console.log(store.getState());