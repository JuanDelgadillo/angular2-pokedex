import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageify'
})
export class ImageifyPipe implements PipeTransform {

  transform(value: string, args?: any): string {

    if (typeof value !== 'string')
      return value;

    let pokemonName = value
      .replace('♀', 'f')
      .replace('♂', 'm')
      .replace(/\W+/g, "")
      .toLocaleLowerCase()

    let url = "/assets/images/pokemons/" + pokemonName + ".jpg";
    return url;
  }

}
