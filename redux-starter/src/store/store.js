import { createStore } from 'redux';
import reducer from './bugs';
import { devToolsEnhancer } from 'redux-devtools-extension';


export default function configureStore() {
    return createStore(reducer, devToolsEnhancer({trace : true}));
};
