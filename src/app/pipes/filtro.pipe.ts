import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg:any ): any {
    if (arg.length < 3) return value;
    const resultadoPost = [];
    for(const post of value){
      if(post.Placa.toLowerCase().indexOf(arg.toLowerCase())>-1 ){
        resultadoPost.push(post);
      }
      else if(post.hora_entrada.toLowerCase().indexOf(arg.toLowerCase())>-1 ){
          resultadoPost.push(post);
      }
      else if(post.marca.toLowerCase().indexOf(arg.toLowerCase())>-1 ){
        resultadoPost.push(post);
    }
    };
    return resultadoPost;
  }

}
