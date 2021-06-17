import configureStore from './store/store';
import { bugAdded, bugRemoved, bugResolved, getUnresolvedBugs, bugAssignedToUser } from './store/bugs';
import { addProjects } from './store/projects';
import { addUser } from './store/users';

const store = configureStore();
console.log(store);

store.subscribe(() => {
    console.log('store changed', store.getState());
})

store.dispatch(addProjects({ name: 'Project 1' }));

// store.dispatch(bugAdded({ description: 'Bug 1' }));
// store.dispatch(bugAdded({ description: 'Bug 2' }));
// store.dispatch(bugAdded({ description: 'Bug 3' }));
// store.dispatch(bugAdded({ description: 'Bug 4' }));
// store.dispatch(bugRemoved({ id: 4 }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(addUser({ name: "Rishabh Agrawal" }));
// store.dispatch(addUser({ name: "Shikha Bansal" }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));


console.log(store.getState());
console.log('unresolved Bugs', getUnresolvedBugs(store.getState()))