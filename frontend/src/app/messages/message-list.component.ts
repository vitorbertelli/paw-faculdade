import { Component, OnInit } from '@angular/core';

import { MessageSignalComponent } from './message-signal.component';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [
    MessageSignalComponent
  ],
  templateUrl: './message-list.component.html'
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message("Texto 01 da Mensagem", "VitorBertelli"),
    new Message("Texto 02 da Mensagem", "BertelliPrado"),
    new Message("Texto 03 da Mensagem", "PradoVitor")
  ]

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
}
