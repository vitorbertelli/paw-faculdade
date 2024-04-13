import { Routes } from '@angular/router';

import { MessageComponent } from './components/messages/message/message.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AUTH_ROUTES } from './auth.routes';

export const routes: Routes = [
  { path: "", redirectTo: "/mensagens", pathMatch: "full" },
  { path: "mensagens", title: "Mensagens", component: MessageComponent },
  { path: "autenticacao", title: "Autenticação", component: AuthenticationComponent,
    children: AUTH_ROUTES
   },
  { path: "**", component: PageNotFoundComponent }
];
