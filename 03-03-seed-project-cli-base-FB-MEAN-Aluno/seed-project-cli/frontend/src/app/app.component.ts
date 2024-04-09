import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { Message } from './models/message.model';
import { MessageSignalComponent } from './components/message-signal/message-signal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MessageComponent,
    MessageSignalComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  valorNgSwitch: number = 0;

  mostrarElemento: boolean = true;

  onMudarMostrarElemento() {
    this.mostrarElemento = !this.mostrarElemento;
  }

  messages: Message[] = [
    new Message("Texto 01 da Mensagem", "VitorBertelli"),
    new Message("Texto 02 da Mensagem", "BertelliPrado"),
    new Message("Texto 03 da Mensagem", "PradoVitor")
  ]

  messageBiding: Message = new Message("Texto da Mensagem via Input", "VitorBertelli");

  title = 'frontend';
}
