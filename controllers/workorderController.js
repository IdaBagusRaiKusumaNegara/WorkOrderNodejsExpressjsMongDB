import WorkOrder from "../models/workOrder.js";
export const getOrders = async(req, res) => {
    try {
        const workOrders = await WorkOrder.find();
        res.status(200).json(workOrders);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}

export const getOrderID = async(req, res) => {
    try {
        const workOrders = await WorkOrder.findById(req.params.id);
        res.status(200).json(workOrders);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}

export const saveOrder = async(req, res) => {
    const workOrder = new WorkOrder(req.body);
    try {
        const ressave = await workOrder.save();
        res.status(201).json(ressave);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}

export const updateOrder = async(req, res) => {
    var orderID = await WorkOrder.findById(req.params.id);
    if (!orderID) return res.status(404).json({ status: false, message: "Data Not Found" })

    try {
        const resupdate = await WorkOrder.updateOne({ id: req.params.id }, { $set: req.body });
        res.status(200).json(resupdate);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}

export const deleteOrder = async(req, res) => {
    var orderID = await WorkOrder.findById(req.params.id);
    if (!orderID) return res.status(404).json({ status: false, message: "Data Not Found" })

    try {
        const resdelete = await WorkOrder.deleteOne({ id: req.params.id });
        res.status(200).json(resdelete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}