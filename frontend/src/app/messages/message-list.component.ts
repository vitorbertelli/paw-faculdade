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

  messages: Message[] = []

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe({
      next: (dadosSucesso: any) => {
        this.messages = dadosSucesso.objsMessagesRecuperados;
      },
      error: (dadosError) => {
        console.log(`$== !!Error (subscribe): - ${dadosError.info_extra} ==`);
        console.log(dadosError);
      }
    });
  }
}
