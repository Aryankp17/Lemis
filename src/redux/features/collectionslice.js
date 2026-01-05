import { createSlice } from "@reduxjs/toolkit";

const CollectionSlice = createSlice({
    name: "Collection",
    initialState:{
        Collection:[],
        loading:false,
        error:null
    },
    reducers:{
        addtoCollection(state,action){
            state.Collection.push(action.payload)

        },
        removefromCollection(state,action){
            state.Collection = state.Collection.filter((item)=>item.id !== action.payload.id)
        },
        setloading(state,action){
            state.loading = action.payload
            state.error = null
        },
        stoploading(state,action){
            state.loading = action.payload
        },
        seterror(state,action){
            state.error = action.payload
        }

    }
})
export const {addtoCollection,removefromCollection,setloading,stoploading,seterror} = CollectionSlice.actions
export default CollectionSlice.reducer