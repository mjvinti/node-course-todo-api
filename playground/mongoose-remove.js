const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5a732d959a2a670b61c9eb22'}).then((done) => {
//
// });

Todo.findByIdAndRemove('5a732d959a2a670b61c9eb22').then((todo) => {
  console.log(todo);
});
