import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { takeLatest } from "redux-saga/effects"
import SagaGenerator, { createActionTypes } from "@/apis/SagaGenerator"
import * as authApi from "@/apis/api"


const INIT_FORM = "auth/INIT_FORM"
const INPUT_VALUES = "auth/INPUT_VALUES"

const [USER_JOIN, USER_JOIN_SUCCESS, USER_JOIN_FAILURE] = createActionTypes("auth/USER_JOIN")
export const initForm = createAction(INIT_FORM, form => form)
export const inputValues = createAction(INPUT_VALUES, ({ form, key, value }) => ({ form, key, value}) )
export const userJoin = createAction(USER_JOIN, 
    ({userid, name, email, password, phone, birth, address}) => ({userid, name, email, password, phone, birth, address}))
const userJoinSaga = SagaGenerator(USER_JOIN, authApi.userJoin)
export function* authSaga(){
    yield takeLatest(USER_JOIN, userJoinSaga)
}
const initialState = {
    userJoin: {userid:'', name:'', email:'', password:'', phone:'', birth:'', address:''},
    auth: null,
    authError: null
}

const auth = handleActions({
    [INPUT_VALUES]: (state, { payload : {form, key, value }}) => produce(state, draft =>{draft[form][key] = value}),
    [INIT_FORM]: (state, {payload: form}) => ({...state, [form]: initialState[form], authError: null}),
    [USER_JOIN_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
    [USER_JOIN_FAILURE]: (state, {payload: error}) => ({...state, authError: error})
    
}, initialState)

export default auth
