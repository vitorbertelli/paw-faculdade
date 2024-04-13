import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MessageService } from '../../../services/message.service';
import { Message } from '../../../models/message.model';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css',
  // providers: [
  //   MessageService
  // ]
})
export class MessageInputComponent {

  constructor(private messageService: MessageService) { }

  // onSave(textoConsole: string) {
  //   const messageAux = new Message(textoConsole, "Vitor");
  //   this.messageService.addMessage(messageAux);
  //   console.log(textoConsole);
  // }

  onSubmit(form: NgForm) {
    console.log("MessageInputComponent: " + form);
    const messageAux: Message = new Message(form.value.myContentngForm, "Vitor");
    this.messageService.addMessage(messageAux);
    form.resetForm();
  }
}
