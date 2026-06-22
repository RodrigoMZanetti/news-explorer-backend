function noRouteMiddleware(req, res, next) {
  return res.status(404).send({ message: 'This route was not found' });
}

module.exports = noRouteMiddleware;
