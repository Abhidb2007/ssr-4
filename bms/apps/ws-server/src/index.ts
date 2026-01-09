import {WebSocketServer} from "ws";
import {client} from "@repo/db/client";
const server=new WebSocketServer({
    port:30001,
})
server.on("connection", async (socket) => {
    try {
        await client.user.create({
            data: {
                username: Math.random().toString(36).slice(2, 10),
                password: Math.random().toString(36).slice(2, 12),
            },
        })
        socket.send("hi there you are connected to the server")
    } catch (err) {
        console.error('ws-server connection handler error:', err)
        try {
            socket.send("server error: could not create user")
        } catch {}
    }
})