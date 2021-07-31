const express = require('express');
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } =  require('../db')
const minionsRouter = express.Router();

minionsRouter.param('minionId', (req, res, next, minionId) => {
    const minion = getFromDatabaseById('minion',minionId);
    if(minion){
      req.minionId = minionId;
      next();
    }  else{
      res.status(404).send('minion not found!');
    }
  })

minionsRouter.get('/',(req,res,next)=>{
    const minions = getAllFromDatabase('minion');
    res.status(200).send(minions);
});
minionsRouter.post('/',(req,res,next)=>{
    const minion =  addToDatabase('minion',req.body);
    res.status(201).send(minion);
});
minionsRouter.get('/:minionId',(req,res,next)=>{
    const minion = getFromDatabaseById('minion',req.minionId);
    res.status(200).send(minion);
});
minionsRouter.put('/:minionId',(req,res,next)=>{
    const minion = updateInstanceInDatabase('minion',req.body);
    res.status(200).send(minion);
});
minionsRouter.delete('/:minionId',(req,res,next)=>{
    const minion = deleteFromDatabasebyId('minion',req.minionId);
    res.status(204).send(minion);
});



module.exports = minionsRouter;