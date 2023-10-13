import { ADD_ITEM, DELETE_ITEM, EDIT_TASK, FAIL_REQ, GET_TASK_LIST, MAKE_REQ } from "../actions/constant"

const initialState = {
    loading: true,
    tasklist: [],
    errMsg: ""
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_REQ:
            return {
                ...state,
                loading: true
            }

        case FAIL_REQ:
            return {
                ...state,
                loading: false,
                errMsg: action.payload
            }

        case GET_TASK_LIST:
            return {
                loading: false,
                errMsg: "",
                tasklist: action.payload
            }

        case ADD_ITEM:
            return { ...state, loading: false }

        case DELETE_ITEM:
            return { ...state, loading: false }

        case EDIT_TASK:
            return { ...state, loading: false }

        default:
            return state
    }
}