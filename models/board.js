const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Board = new Schema({
    boardSeq: {type: Number, required: false, default: 0, unique: true}
  , parentSeq: {type: Number, required: false, default: 0, unique: false}
  , username: {type:String, required: false}
  , title: {type:String, required: false}
  , content: {type:String, required: false}
  , createDate: {type:Date, required: false}
  , updateDate: {type:Date, required: false}
  , count: {type: Number, required: false, default: 0}
  , isDelete: {type:Boolean, required: false, default: false}
  , isSecret: {type:Boolean, required: false, default: false}
});

const mongooseAutoIncrement = require('mongoose-auto-increment');
mongooseAutoIncrement.initialize(mongoose);

Board.plugin(mongooseAutoIncrement.plugin, {model: 'Board', field: 'boardSeq', startAt: 1, incrementBy: 1});

Board.statics.create = function(req, res) {
  const board = new this(req.body);

  return board.save()
}

Board.statics.findOneBySeq = function(req, res) {
  return this.findOne({'boardSeq': req.params.boardSeq})
}

Board.statics.updateBySeq = function(req, res) {
  return this.findOneAndUpdate({'boardSeq': req.params.boardSeq}, req.body, {new: true})
}

Board.statics.updateBySeqForDelete = function(req, res) {
  return this.findOneAndUpdate({'boardSeq': req.params.boardSeq}, {$set: {isDelete: true}}, {new: true})
}

module.exports = mongoose.model('Board2', Board);
