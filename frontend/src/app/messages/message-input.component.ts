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
    this.messageService.addMessage(messageAux)
      .subscribe({
        next: (dadosSucesso: any) => {
          console.log(dadosSucesso.myMsgSucesso);
          console.log({ content: dadosSucesso.objMessageSave.content});
          console.log({ id: dadosSucesso.objMessageSave._id});
        },
        error: (dadosError) => {
          console.log(`$== !!Error (subscribe): - ${dadosError.info_extra} ==`);
          console.log(dadosError);
        }
      });
    form.resetForm();
  }
}
