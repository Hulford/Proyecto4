import {PipeTransform, Pipe} from"@angular/core"

//fernando | togglecase = FERNANDO
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{
  transform(value: string, toUpper: boolean = false): string {
  //  console.log({args})
return (toUpper) ? value.toUpperCase()
:value.toLowerCase();
  }
}
