import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatModule } from '../../app/Model/chat/chat.module';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  webSocket: WebSocket;
  chatMessages: ChatModule[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8089/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: ChatModule){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
