import { Pipe, PipeTransform } from 'angular2/core'

@Pipe({ name: 'imageify' })

export class ImageifyPipe implements PipeTransform {
	transform(value: string, args: string[]) {
		var url = "public/assets/img/pokemons/" + value.toLowerCase() + ".jpg";
      return url;
	}
}