import { FormularioComponent } from './formulario/formulario.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'nav', component: NavComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: 'formulario', component: FormularioComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
