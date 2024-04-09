import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  color = "yellow";

  @Input() messageVarClasse: Message = new Message("", "");

  @Output() outputMessage: EventEmitter<string> = new EventEmitter<string>();

  onEdit() {
    this.outputMessage.emit("Texto retornado: venho de message (child) para o app (pai)");
  }
}
