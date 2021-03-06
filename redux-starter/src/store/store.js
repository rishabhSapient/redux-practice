import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middleware/logger';


export default function configureAppStore() {
    return configureStore({
        reducer,
        middleware : [logger]
    })
};
