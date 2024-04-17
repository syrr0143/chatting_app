import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: []
    }],
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });
export const Conversation = mongoose.model('Conversation', conversationSchema);
