import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = "http://localhost:3000";

  private messageService: Message[] = [];

  constructor(private http: HttpClient) { }

  addMessage(message: Message): Observable<any> {
    this.messageService.push(message);
    console.log(this.messageService);

    return this.http.post<any>(`${this.baseUrl}/message`, message).pipe(
      catchError((error) => this.errorHandler(error, "addMessage()"))
    );
  }

  deleteMessage(message: Message) {
    this.messageService.splice(this.messageService.indexOf(message), 1);
  }

  getMessages() {
    return this.http.get<any>(`${this.baseUrl}/message`).pipe(
      map((responseRecebida: any) => {
        console.log(responseRecebida);
        console.log({ content: responseRecebida.objsMessagesRecuperados[0].content});
        console.log({ _id: responseRecebida.objsMessagesRecuperados[0]._id});

        const messagesResponseRecebida = responseRecebida.objsMessagesRecuperados;

        let transformedCastMessagesModelFrontend: Message [] = [];
        for(let msg of messagesResponseRecebida) {
          transformedCastMessagesModelFrontend.push(
            new Message(msg.content, "Vitor", msg._id)
          )
          this.messageService = [...transformedCastMessagesModelFrontend];
          responseRecebida.objsMessagesRecuperados = this.messageService;

          console.log({myMsgSucesso: responseRecebida.myMsgSucesso});
          console.log({content: responseRecebida.objsMessagesRecuperados[0].content});
          console.log({id: responseRecebida.objsMessagesRecuperados[0]._id});

          return responseRecebida
        }
      }),
      catchError((error) => this.errorHandler(error, "getMessages()"))
    );
  }

  errorHandler(error: any, info: string): Observable<any> {
    throw({
      info_extra: info,
      error_SS: error,
      error_CS: "Client-Side: errorHandler: Ocorreu um erro!" 
    })
  }
}
