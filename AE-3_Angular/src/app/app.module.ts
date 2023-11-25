import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    ContactoComponent,
    SobreNosotrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
