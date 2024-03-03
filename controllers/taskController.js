const Task = require('../models/taskModel');

exports.createTask = async(req, res) => {
  try {
    const {title, description} = req.body;
    await Task.create({title, description});
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
}

exports.getAllTasks = async(req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index.ejs', {tasks})
  } catch (error) {
    console.log(error.message);    
  }
}

exports.startTask = async(req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, {status: 'ongoing'});
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
}

exports.completeTask = async(req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, {status: 'complete'});
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
}
