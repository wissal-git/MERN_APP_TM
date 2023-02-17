
//@desc get Goals 
//@route GET /api/goals
//@access Private

const getGoals =(req,res) =>{
    res.json({message:'Get your Goal !'})

}
//@desc set Goal
//@route POST /api/goals
//@access Private

const setGoals =(req,res) =>{
    if (!req.body.text) {
        //res.status(400).json({ message: 'Please add a text field'})
         res.status(400)
         throw new  Error('please add a text field ')
    }
    res.json({message:'post your Goal !'})
}

//@desc update Goal
//@route PUT /api/goals/:id
//@access Private

const updateGoals =(req,res) =>{
    res.json({message:`update your Goal !${req.params.id}`})
}

//@desc delete Goal
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals =(req,res) =>{
    res.json({message:`delete your Goal !${req.params.id}`})
}



module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}
