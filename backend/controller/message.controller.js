import mongoose from 'mongoose'
import { Message } from '../models/message.model.js'
import { User } from '../models/user.model.js';
import { Conversation } from '../models/conversation.model.js'
import { getReceiverSocketId, io } from '../socket/socket.js';
const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const receiverid = req.params.id;

        const senderid = req.user._id;
        if (!senderid) {
            return res.status(400).json({ message: "user not logged in , you must login first" })
        }
        const senderFound = await User.findById(senderid);
        if (!senderFound) {
            return res.status(404).json({ message: "sender not found" })
        }
        const receiver = await User.findById(receiverid);
        if (!receiver) {
            return res.status(404).json({ message: "receiver not found" })
        }
        let conversation = await Conversation.findOne({
            participants: { $all: [receiverid, senderid] }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderid, receiverid]
            });
        };

        const newMessage = await Message.create({
            receiverid,
            senderid,
            message
        });
        if (newMessage) {
            conversation.message.push(newMessage._id);
            await conversation.save();
        }

        const receiverSocketId = getReceiverSocketId(receiverid);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }
        return res.status(200).json({ message: "message sent successfully", message: newMessage });

    } catch (error) {
        // console.log(error)
        return res.status(500).json({ message: `internal server error from send message, something went wrong`, error: error.message })
    }
}
const getmessage = async (req, res) => {
    try {
        const receiverId = req.user._id;
        const senderId = req.params.id;
        if (!receiverId) {
            return res.status(400).json({ message: "user not logged in , you must login first" })
        }
        if (!senderId) {
            return res.status(400).json({ message: "provide sender id, sender id is required" })
        }
        const conversation = await Conversation.findOne(
            {
                participants: { $all: [receiverId, senderId] }
            }
        ).populate('message')

        return res.status(200).json({ message: 'chat retreived successfully', conversation: conversation });
    } catch (error) {
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
}

export { sendMessage, getmessage };