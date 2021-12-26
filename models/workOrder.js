import mongoose from "mongoose";
import { Timestamp } from "bson";

const WorkOrder = mongoose.Schema({
    reqID: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['software', 'hardware', 'jaringan', 'lain-lain'],
        require: true
    },
    description: {
        type: String
    },
    userID: {
        type: Number,
        require: true
    },
    file: {
        type: String
    }
}, {
    timestamps: true,
});

export default mongoose.model("workOrders", WorkOrder);