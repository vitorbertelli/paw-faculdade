import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Message } from '../../models/message.model';

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

  color = "yellow";

  messageVarClasse = input<Message>(new Message("", ""));

  @Output() outputMessage: EventEmitter<string> = new EventEmitter<string>();

  onEdit() {
    this.outputMessage.emit("Texto retornado component com Signal: venho de message (child) para o app (pai)");
  }
}
