const { Router } = require('express');
const { check } = require('express-validator');
const { createOrder } = require('../controllers/order.controller');
const { protect } = require('../middlewares/auth.middleware');
const { validExistMeal } = require('../middlewares/order.middleware');
const {
  validateFields,
  createOrderValidation,
} = require('../middlewares/validateFields.middleware');

const router = Router();

router.use(protect);

router.post(
  '/',
  createOrderValidation,
  validateFields,
  validExistMeal,
  createOrder
);

module.exports = {
  orderRouter: router,
};
