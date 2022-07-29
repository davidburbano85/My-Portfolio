import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validarFormulario'
})
export class ValidarFormularioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
