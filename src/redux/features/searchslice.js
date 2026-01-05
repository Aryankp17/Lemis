import { createSlice } from '@reduxjs/toolkit'

const Searchslice = createSlice({
    name:"Search",
    initialState:{
        query:'',
        Activetab:'Photo',
        Result:[],
        loading:false,
        error:null
    },reducers:{
        SetQuery(state,action){
            state.query = action.payload
        },
        setActivetab(state,action){
            state.Activetab = action.payload
        },
        SetResult(state,action){
            state.Result  =action.payload
        },
        SetLoading(state,action){
            state.loading = action.payload
            state.error = null
        },
        SetError(state,action){
            state.error = action.payload
        },
        StopLoading(state,action){
            state.loading = action.payload
        }
    }
})
export const {SetQuery,setActivetab,SetResult,SetLoading,SetError,StopLoading} = Searchslice.actions
export default Searchslice.reducer