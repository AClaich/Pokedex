import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { PokemonRoutingModule} from './pokemon-routing.module';

import { ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonService } from './services/pokemons.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from '../loader.component';

import {FormsModule} from '@angular/forms';
import { EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent} from './pokemon-form/pokemon-form.component';

import { AuthGard} from './services/auth-gard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    SearchPokemonComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: [PokemonService, AuthGard],
})
export class PokemonModule { }
