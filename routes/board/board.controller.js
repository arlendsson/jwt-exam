// const Board = require('../../../models/board')
const Board = require('../../models/board')

/*
  GET /board
*/
exports.find = (req, res) => {
  Board.find({})
    .then(
      boards => {
        res.json({boards})
      }
    )
}

/*
  GET /board/:boardSeq
*/
exports.findOne = (req, res) => {
  Board.findOneBySeq(req, res)
    .then(
      board => {
        res.json({board})
      }
    )
}

/*
  POST /board
*/
exports.create = (req, res) => {
  Board.create(req, res)
}

/*
  PUT /board/:boardSeq
*/
exports.update = (req, res) => {
  Board.updateBySeq(req, res)
    .then(
      board => {
        res.json({board})
      }
    )
}
/*
  DELETE /board/:boardSeq
*/
exports.delete = (req, res) => {
  Board.updateBySeqForDelete(req, res)
    .then(
      board => {
        res.json({board})
      }
    )
}
