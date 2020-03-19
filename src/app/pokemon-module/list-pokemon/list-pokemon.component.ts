import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {Pokemon} from '../pokemon';
import {PokemonService} from '../services/pokemons.service';

import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;

  constructor(private router: Router, private pokemonService: PokemonService) {
    // A NE PAS FAIRE !
    // let pokemonService = new PokemonService()
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
