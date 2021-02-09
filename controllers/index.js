const PostController = require('./PostController');
const ItemController = require('./ItemController');
const ReservationController = require('./ReservationController');

module.exports = {
  post: PostController,
  item: ItemController,
  reservation: ReservationController
}
