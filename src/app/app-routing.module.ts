import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'logar', redirectTo: '/not-found'},
  { path: 'login', component: LoginComponent },
  { path: 'tabela', component: TabelaComponent },

  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
