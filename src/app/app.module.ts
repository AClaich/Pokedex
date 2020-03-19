import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonModule} from './pokemon-module/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pokemon-module/page-not-found/page-not-found.component';
import { PokemonService } from './pokemon-module/services/pokemons.service';

import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './pokemon-module/services/in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
