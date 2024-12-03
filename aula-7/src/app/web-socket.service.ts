import { Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class WebSocketService {
  constructor() {}

  socket!: Socket;

  connect() {
    this.socket = io("http://localhost:3000", {});

    this.socket.on("nova:mensagem-chatgpt", function (data) {
      console.log(data);
      console.log(data.mensagem);
    });
  }

  enviarMensagem(mensagem: string) {
    this.socket.emit("nova:mensagem", {
      mensagem,
    });
  }
}
