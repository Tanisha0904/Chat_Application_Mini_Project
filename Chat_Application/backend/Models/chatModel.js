//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin

const mongoose = require('mongoose');
const { chats } = require('../data/data');

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Messages",
        },

        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;