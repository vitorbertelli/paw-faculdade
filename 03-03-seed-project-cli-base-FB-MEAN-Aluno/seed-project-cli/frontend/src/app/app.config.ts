import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { MessageService } from './services/message.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: MessageService }
  ]
};
