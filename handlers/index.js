
module.exports = {
  ...require('./auth'),
  ...require('./poll')
}


module.exports.errors = (err, req, res, next) => {
    res.status(err.status || 400).json({
      err: err.message || "something went wrong"
    })}

    module.exports.notFound = (req, res, next)  => {
        const err =  new Error('not found');
        err.status = 404;
      
        next(err);
      }