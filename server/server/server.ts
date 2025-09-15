import { Socket } from "socket.io";

import { Rooms } from "./types";

const express = require("express");
const { createServer } = require("http");

const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export const rooms: Rooms = {};
const PORT = 5000;

const userSockets: { [userName: string]: string } = {};

io.on("connection", (socket: Socket) => {
  console.log("User is connected with socket id ", socket.id);

  socket.on("joinRoom", ({ roomId, userName }) => {
    const existSocketId = userSockets[userName];
    if (existSocketId && existSocketId !== socket.id) {
      socket.emit("joinError", {
        message:
          "This username is already taken in this room. Please choose another.",
      });
      return;
    }

    userSockets[userName] = socket.id;

    (socket as any).userName = userName;
    (socket as any).roomId = roomId;
    socket.join(roomId);
    if (!rooms[roomId]) {
      rooms[roomId] = { users: [], results: [], completedUserCount: 0 };
    }

    const userExistInRoom = rooms[roomId].users.find(
      (u) => u.userName === userName,
    );
    if (!userExistInRoom) {
      rooms[roomId].users.push({ id: socket.id, userName });
    } else {
      userExistInRoom.id = socket.id;
    }

    io.to(roomId).emit("roomData", {
      users: rooms[roomId].users,
      results: rooms[roomId].results,
      completedUserCount: rooms[roomId].completedUserCount,
    });
    console.log(`User ${userName} join room with id ${roomId}`);
  });

  socket.on("liveScore", ({ roomId, userName, correctAnswers }) => {
    const room = rooms[roomId];
    if (room) {
      const userRes = room.results.find((r) => r.userName === userName);
      if (userRes) {
        userRes.correctAnswers = correctAnswers;
      } else {
        room.results.push({ userName, correctAnswers, isCompleted: false });
      }
      io.to(roomId).emit("roomData", {
        users: rooms[roomId].users,
        results: rooms[roomId].results,
        completedUserCount: rooms[roomId].completedUserCount,
      });
    }
    console.log(
      `live score from ${userName} in room ${roomId}: ${correctAnswers}`,
    );
  });

  socket.on("results", ({ roomId, userName, correctAnswers }) => {
    const room = rooms[roomId];
    if (room) {
      const userResult = room.results.find((res) => res.userName === userName);
      if (userResult) {
        userResult.correctAnswers = correctAnswers;
        if (!userResult.isCompleted) {
          userResult.isCompleted = true;
          room.completedUserCount++;
        }
      } else {
        room.results.push({ userName, correctAnswers, isCompleted: true });
        room.completedUserCount++;
      }
      io.to(roomId).emit("roomData", {
        users: room.users,
        results: room.results,
        completedUserCount: room.completedUserCount,
      });
    }
    console.log(`Result of ${userName} is ${correctAnswers}`);
  });

  socket.on("leaveRoom", ({ roomId, userName }) => {
    leaveRoom(socket, roomId, userName);
  });

  socket.on("disconnect", () => {
    console.log(`Server is disconnect ${PORT}`);

    const userName = (socket as any).userName;
    const roomId = (socket as any).roomId;
    if (!userName || !roomId) return;
    if (userSockets[userName] === socket.id) {
      delete userSockets[userName];
      leaveRoom(socket, roomId, userName);
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function leaveRoom(socket: Socket, roomId: string, userName: string) {
  const room = rooms[roomId];
  if (room) {
    const userIndex = room.users.findIndex((u) => u.userName === userName);
    if (userIndex !== -1) {
      room.users.splice(userIndex, 1);
      const scoreIndex = room.results.findIndex((r) => r.userName === userName);
      if (scoreIndex !== -1) {
        const userResult = room.results[scoreIndex];
        if (userResult.isCompleted) {
          room.completedUserCount--;
        }
        room.results.splice(scoreIndex, 1);
      }
      socket.leave(roomId);
      io.to(roomId).emit("roomData", {
        users: room.users,
        results: room.results,
        completedUserCount: room.completedUserCount,
      });
      console.log(`User ${userName} is left from room ${roomId}`);

      if (room.users.length === 0) {
        delete rooms[roomId];
        console.log("Room is deleted");
      }
    }
  }
}
