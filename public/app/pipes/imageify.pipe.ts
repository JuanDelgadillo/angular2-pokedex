import { Pipe, PipeTransform } from 'angular2/core'

@Pipe({ name: 'imageify' })

export class ImageifyPipe implements PipeTransform {
	transform(value: string, args: string[]) {
		let pokemonName = value
							.replace('♀', 'f')
                  			.replace('♂', 'm')
                  			.replace(/\W+/g, "")
							.toLocaleLowerCase()
 
		let url = "public/assets/img/pokemons/" + pokemonName + ".jpg";
      return url;
	}
}