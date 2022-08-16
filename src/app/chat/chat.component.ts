import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../Service/chat.service';
import { ChatModule } from '../../app/Model/chat/chat.module';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: ChatService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatModule(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    console.log(sendForm.value);
  const a = sendForm.value.message;
    a.controls.reset();
 sendForm.controls['message'].reset();
 
    
  }

}
