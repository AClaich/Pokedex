import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../services/pokemons.service';

@Component({
  selector: 'edit-pokemon',
//   template: `<h2 class="header center">Editer {{ pokemon?.name }}</h2>
// <p class="center">
//   <img *ngIf="pokemon" [src]="pokemon.picture"/>
// </p>
// <pokemon-form [pokemon]="pokemon"></pokemon-form>
// `,
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }


}
