import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './features/searchslice'
import CollectionReducer from './features/collectionslice'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
const persistConfig = {
    key:'root',
    storage:localStorage,
    whitelist:['Collection']
}
const persistedReducer = persistReducer(persistConfig,CollectionReducer)
export const Store = configureStore({
    reducer:{
        Search:SearchReducer,
        Collection:persistedReducer,
    }
})
export const presistor = persistStore(Store)

