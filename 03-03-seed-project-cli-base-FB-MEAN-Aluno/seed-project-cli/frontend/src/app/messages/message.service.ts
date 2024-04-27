import { Injectable } from '@angular/core';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageService: Message[] = [];

  addMessage(message: Message) {
    this.messageService.push(message);
    console.log(this.messageService);
  }

  deleteMessage(message: Message) {
    this.messageService.splice(this.messageService.indexOf(message), 1);
  }

  getMessages() {
    return this.messageService;
  }
}
