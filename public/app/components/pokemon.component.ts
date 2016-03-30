import {Component} from 'angular2/core'

@Component({
  selector: 'pokemon',
  template: `
    <div>
      <h1>{{ pokemon.name }} #{{ pokemon.id }}</h1>
      <h2>{{ pokemon.species }}</h2>
      <img src="public/assets/img/{{ pokemon.name | lowercase }}.jpg">
      <h2>Pokédex</h2>
      <ul>
        <li><strong>Type</strong> {{ pokemon.type.join(', ') }}</li>
        <li><strong>Height</strong> {{ pokemon.height }}</li>
        <li><strong>Weight</strong> {{ pokemon.weight }}</li>
        <li><strong>Abilities</strong> {{ pokemon.abilities.join(', ') }}</li>
      </ul>
    </div>
  `
})

export class PokemonComponent {
  pokemon = {
      id: "001",
      name: "Bulbasaur",
      species: "Seed Pokémon",
      type: [ "Grass", "Poison" ],
      height: "2′4″ (0.71m)",
      weight: "15.2 lbs (6.9 kg)",
      abilities: [ "Overgrow", "Chlorophyll"]
    }
}