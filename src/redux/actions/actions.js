import { addToDoTaskService, deleteToDoTaskService, toDoTask, updateToDoTaskService } from "../../services/todoTask"
import { ADD_ITEM, DELETE_ITEM, EDIT_TASK, FAIL_REQ, GET_TASK_LIST, MAKE_REQ } from "./constant"

export const addItem = (data) => {
    return {
        type: ADD_ITEM
    }
}

export const deleteItem = () => {
    return {
        type: DELETE_ITEM
    }
}

export const editTask = (data) => {
    return {
        type: EDIT_TASK,
    }
}

export const makeReq = () => {
    return {
        type: MAKE_REQ
    }
}

export const failReq = (err) => {
    return {
        type: FAIL_REQ,
        payload: err
    }
}

export const getTaskList = (data) => {
    return {
        type: GET_TASK_LIST,
        payload: data
    }
}

export const fetchTaskList = async (dispatch) => {
    await dispatch(makeReq)
    await toDoTask().then((res) => {
        const taskList = res.data
        console.log(taskList)
        dispatch(getTaskList(taskList))
    }).catch(err => {
        dispatch(failReq(err.message))
    })
}

export const addTaskInList = (data) => {
    const taskObj = { taskName: data }
    return function (dispatch, getState) {
        addToDoTaskService(taskObj).then((res) => {
            const task = res.data
            dispatch(addItem(task))
        }).catch(e => {
            dispatch(failReq(e.message))
        })
    }
}

export const deleteTaskInList = (id) => {
    return function (dispatch) {
        deleteToDoTaskService(id).then((res) => {
            dispatch(deleteItem())
        }).catch(e => {
            dispatch(failReq(e.message))
        })
    }
}

export const updateTaskInList = (data) => {
    return function (dispatch) {
        updateToDoTaskService(data).then((res) => {
            dispatch(editTask())
        }).catch(e => {
            dispatch(failReq(e.message))
        })
    }
}