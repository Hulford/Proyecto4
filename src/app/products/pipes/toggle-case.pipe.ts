import {PipeTransform, Pipe} from"@angular/core"

//fernando | togglecase = FERNANDO
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{
  transform(value: string): string {
return value.toUpperCase();
  }
}
