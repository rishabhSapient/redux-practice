// action types
const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

// actions creators
export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: {
        description: description
    }
});

export const bugRemoved = id => ({
    type: BUG_REMOVED,
    payload: {
        id: id
    }
});

export const bugResolved = id => ({
    type : BUG_RESOLVED,
    payload: {
        id : id
    }
});
// actions creators


// Reducer
let lastId = 0;
export default function reducer(store = [], action) {
    if (action.type === BUG_ADDED) {
        return [
            ...store,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if (action.type === BUG_REMOVED) {
        return store.filter(val => val.id !== action.payload.id);
    }  else if (action.type === BUG_RESOLVED) {
        return store.map(val => {
            if(val.id == action.payload.id){
                val.resolved = true;
            }
            return val;
        });
    } else {
        return store;
    }
}