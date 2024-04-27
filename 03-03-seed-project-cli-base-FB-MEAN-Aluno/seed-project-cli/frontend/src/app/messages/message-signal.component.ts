import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-signal',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './message-signal.component.html',
  styleUrl: './message-signal.component.css'
})
export class MessageSignalComponent {

  messageVarClasse = input<Message>(new Message("", ""));

  @Output() outputMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private messageService: MessageService) { }

  onEdit() {
    this.outputMessage.emit("Texto retornado component com Signal: venho de message (child) para o app (pai)");
  }

  onDelete() {
    this.messageService.deleteMessage(this.messageVarClasse());
  }
}
