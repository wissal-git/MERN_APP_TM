
const asyncHandler = require('express-async-handler')
const Goal =require('../models/goalModel')
//@desc get Goals 
//@route GET /api/goals
//@access Private

const getGoals =asyncHandler ( async (req,res) =>{
    const Goal = await Goal.find()
    //res.json({message:'Get your Goal !'})
    res.status(200).json(goals)

})
//@desc set Goal
//@route POST /api/goals
//@access Private

const setGoals =asyncHandler (async(req,res) =>{
    if (!req.body.text) {
        //res.status(400).json({ message: 'Please add a text field'})
         res.status(400)
         throw new  Error('please add a text field ')
    }
    const goal = await Goal.create(
        {text:req.body.text,}
    )
    res.json(goal)
}
)
//@desc update Goal
//@route PUT /api/goals/:id
//@access Private

const updateGoals =asyncHandler (async(req,res) =>{

    //find goal that we modify 
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new  Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true,})
    res.status(200).json(updatedGoal)
    // res.json({message:`update your Goal !${req.params.id}`})
})
//@desc delete Goal
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals =asyncHandler (async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new  Error('Goal not found')
    }
     await goal.remove()
   // res.json({message:`delete your Goal !${req.params.id}`})
   res.status(200).json({id:req.params.id})
})

module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}

/**
 * * we can use try catch or throw error
 * ! get goals not working  
 */