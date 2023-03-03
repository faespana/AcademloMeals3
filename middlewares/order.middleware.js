const Meal = require('../models/meal.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validExistMeal = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const meal = await Meal.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!meal) {
    return next(new AppError('Meal not found', 404));
  }

  req.meal = meal;
  next();
});
