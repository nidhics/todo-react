import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskInList, deleteTaskInList, fetchTaskList, updateTaskInList } from '../redux/actions/actions'

const Todo = () => {
    const [textval, setTextval] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)
    const [editObj, setEditObj] = useState({})
    const useselect = useSelector(state => state.taskReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTaskList)
    }, [textval])

    const handleTextVal = (e) => {
        const { value } = e.target
        setTextval(value)
    }

    const handleEdit = (item) => {
        setIsUpdate(true)
        setEditObj(item)
        setTextval(item.taskName)
    }

    const handleDelete = (item) => {
        if (window.confirm("Do you want to remove?")) {
            dispatch(deleteTaskInList(item.id))
            // dispatch(deleteTaskInList(item._id.toString()))
            dispatch(fetchTaskList)
            setTextval("")
        }
    }

    const handleAddTask = () => {
        dispatch(addTaskInList(textval))
        setTextval("")
    }

    const handleUpdate = (textval) => {
        dispatch(updateTaskInList({ ...editObj, taskName: textval }))
        setIsUpdate(false)
        setTextval("")
    }

    return (
        useselect.loading ? <div><h1>loading....</h1></div> :
            useselect.errMsg ? <div><h1>{useselect.errMsg}</h1></div> :
                < div >
                    <h1> 😎 Todo </h1>
                    <div>
                        <input
                            type='text'
                            placeholder='Enter the item'
                            value={textval}
                            onChange={handleTextVal}
                        />
                        {
                            isUpdate ?
                                <button onClick={() => handleUpdate(textval)}
                                >
                                    Update
                                </button> :
                                <button onClick={() => handleAddTask()}>+</button>
                        }
                    </div>

                    <ol style={{ display: "flex", justifyContent: "center" }}>
                        {useselect.tasklist.map((item) =>
                            <li key={item.id} style={{ margin: "1%", borderRadius: "10px", border: "1px solid gray", padding: "1%" }}>
                                {item.taskName}
                                <button onClick={() => handleEdit(item)}>
                                    Edit
                                </button>

                                <button onClick={() => handleDelete(item)}>
                                    Delete
                                </button>
                            </li>)}
                    </ol>
                </div >
    )
}

export default Todo