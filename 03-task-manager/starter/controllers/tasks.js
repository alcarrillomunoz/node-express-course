const Task = require('../models/Task');     //schema 
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error')

// get all tasks 
const getAllTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({})   //passing in empty object will return all items in the collection
    res.status(200).json({ tasks, totalTasks:tasks.length })
})

// create new task 
const createTask = asyncWrapper (async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

// get one task 
const getTask = asyncWrapper(async (req, res, next) => {
    const {id:taskID} = req.params
    const task = await Task.findOne({ _id:taskID })
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

// update task 
const updateTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true})
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({id:taskID, data:req.body})
})

// delete task 
const deleteTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID})
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

// (put method will replace existing item, patch will update only properties passed in) 
// edit task
// const editTask = async (req, res) => {
//     try {
//         const {id:taskID} = req.params;
//         const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true, overwrite:true})
//         if (!task) {
//             return res.status(404).json({ msg: `No task with id: ${taskID}`})
//         }
//         res.status(200).json({ task })
//     }
//     catch (error) {
//         res.status(500).json({ msg:error })
//     }
// }

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }