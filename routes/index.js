import express from "express";
import { getOrders, getOrderID, saveOrder, updateOrder, deleteOrder } from "../controllers/workorderController.js";
const router = express.Router();

// Get All
router.get('/', getOrders);

// Create Data
router.post('/', saveOrder);

// Get by ID
router.get('/:id', getOrderID);

// Update Data
router.patch('/:id', updateOrder);

// Delete Data
router.delete('/:id', deleteOrder);

export default router;