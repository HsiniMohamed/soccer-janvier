import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
let result=""
let voyels=["a","e","u","o","i","y"]
for (let i = 0; i < ch.length; i++) {
  let x=ch[i]
  for (let j = 0; j < voyels.length; j++) {
    if (x.toLowerCase()==voyels[j]) {
      x="*"; break
}
  }
result+=x
}
return result
  }

}
