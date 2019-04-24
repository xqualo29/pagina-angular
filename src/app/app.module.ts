import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { AgendarcitaComponent } from './pages/agendarcita/agendarcita.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { ModeloComponent } from './pages/modelo/modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    AboutComponent,
    ItemComponent,
    PuntosComponent,
    AgendarcitaComponent,
    CreditoComponent,
    DesarrolloComponent,
    ModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
