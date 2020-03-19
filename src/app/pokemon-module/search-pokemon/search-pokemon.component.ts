import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {PokemonService} from '../services/pokemons.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService,
              private router: Router) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // attendre 200ms entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correspondant aux termes de la recherche
      switchMap((term: string) => this.pokemonService.searchPokemons(term)),
    );
  }

  gotoDetail(pokemon: Pokemon): void {
    let link= ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
