import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
    },
});
const usersocketmap = {};
export const getReceiverSocketId = (receiverId) => {
    return usersocketmap[receiverId];
}

io.on('connection', (socket) => {
    //console.log('a user connected', socket.id);
    const userid = socket.handshake.query.userid;

    if (userid && userid !== 'undefined') {
        usersocketmap[userid] = socket.id;
        //console.log('User added:', userid);
        io.emit('getOnlineUsers', Object.keys(usersocketmap));
    }

    socket.on('disconnect', () => {
        //console.log('user disconnected', socket.id);
        delete usersocketmap[userid];
        io.emit('getOnlineUsers', Object.keys(usersocketmap));
    });
});

export { app, io, server };

