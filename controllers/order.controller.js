const Order = require('../models/order.model');
const catchAsync = require('../utils/catchAsync');

exports.createOrder = catchAsync(async (req, res, next) => {
  const { mealId, quantity } = req.body;
  const { sessionUser, meal } = req;

  const order = await Order.create({
    userId: sessionUser.id,
    mealId,
    quantity,
    totalPrice: quantity * meal.price,
  });

  res.status(201).json({
    status: 'success',
    message: 'The review was created successfully',
    order,
  });
});
