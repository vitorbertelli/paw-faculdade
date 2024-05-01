import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = "http://localhost:3000";

  private messagesService: Message[] = [];

  constructor(private http: HttpClient) { }

  addMessage(message: Message): Observable<any> {
    this.messagesService.push(message);
    return this.http.post<any>(`${this.baseUrl}/message`, message).pipe(
      catchError((error) => this.errorHandler(error, "addMessage()"))
    );
  }

  deleteMessage(message: Message) {
    this.messagesService.splice(this.messagesService.indexOf(message), 1);
    this.http.delete<any>(`${this.baseUrl}/message/${message.messageId}`).subscribe();
  }

  getMessages() {
    return this.http.get<any>(`${this.baseUrl}/message`).pipe(
      map((responseRecebida: any) => {

        const messagesResponseRecebida = responseRecebida.objsMessagesRecuperados;

        let transformedCastMessagesModelFrontend: Message [] = [];
        for(let msg of messagesResponseRecebida) {
          transformedCastMessagesModelFrontend.push(
            new Message(msg.content, "Vitor", msg._id)
          );
        }
        this.messagesService = [...transformedCastMessagesModelFrontend];
        responseRecebida.objsMessagesRecuperados = this.messagesService;

        return responseRecebida
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
