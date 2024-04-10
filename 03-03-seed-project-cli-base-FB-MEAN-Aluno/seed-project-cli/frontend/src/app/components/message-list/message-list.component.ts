import { Component } from '@angular/core';
import { MessageSignalComponent } from '../message-signal/message-signal.component';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [
    MessageSignalComponent
  ],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {

  messages: Message[] = [
    new Message("Texto 01 da Mensagem", "VitorBertelli"),
    new Message("Texto 02 da Mensagem", "BertelliPrado"),
    new Message("Texto 03 da Mensagem", "PradoVitor")
  ]
}
