import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'imageify' })

export class ImageifyPipe implements PipeTransform {
	transform(value: any) {
		if (!value) return ''
		
		let pokemonName = value
			.replace('♀', 'f')
			.replace('♂', 'm')
			.replace(/\W+/g, "")
			.toLocaleLowerCase()
 
  	let url = "public/assets/img/pokemons/" + pokemonName + ".jpg";
    return url;
	}
}