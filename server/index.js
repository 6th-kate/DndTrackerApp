const express = require("express");

const app = express();
const PORT = 6000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIO = require('socket.io') (http, {
    cors: {
        origin: "*"
    }
});

const gameRooms = {};

function makeID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("createGame", (characters) => {
        let roomName = makeID(4);
        while (roomName in gameRooms) {
            roomName = makeID(4);
        }
        socket.join(roomName);
        gameRooms[roomName] = characters;
        socket.emit("createdGame", roomName);
    });

    socket.on("refreshCharacters", (characters, code) => {
        socket.to(code).emit("refreshedCharacters", characters);
    });

    socket.on("deleteGame", (code) => {
        socket.to(code).emit("gameDeleted");
        socket.leave(code);
        delete gameRooms[code];
    });

    socket.on("connectGame", (code) => {
        if (code in gameRooms) {
            socket.join(code);
            socket.emit("connectedGame", gameRooms[code], code);
        }
        else {
            socket.emit("incorrectRoom");
        }
    });

    socket.on("leaveGame", (code) => {
        socket.leave(code);
    });

    socket.on('disconnect', () => {
      socket.disconnect()
      console.log('🔥: A user disconnected');
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
