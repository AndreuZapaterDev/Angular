import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  
  pokemon = input.required<Pokemon>();

  likeChange = output<Pokemon>();

  toggleLike() {
    const updatedPokemon: Pokemon = { ...this.pokemon(), liked: !this.pokemon().liked };
    this.likeChange.emit(updatedPokemon);
  }
}
