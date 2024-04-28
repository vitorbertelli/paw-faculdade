import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './message-input.component.html',
  styles: `
    input.ng-invalid.ng-touched {
      border: 1px solid red;
    }
  `
})
export class MessageInputComponent {

  constructor(private messageService: MessageService) { }

  onSubmit(form: NgForm) {
    console.log("MessageInputComponent: " + form);
    const messageAux: Message = new Message(form.value.myContentngForm, "Vitor");
    this.messageService.addMessage(messageAux);
    form.resetForm();
  }
}
