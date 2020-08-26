import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddPipe'
})
export class OddPipePipe implements PipeTransform {

  transform(oddType: string): string {
    let odd: string = "";

    if (oddType == "1" || oddType == "2" || oddType == "winner1" || oddType == "winner2") {
      odd = oddType;
    }
    else if (oddType == "firstSet1") {
      odd = "FS1";
    } else if (oddType == "firstSet2") {
      odd = "FS2";
    }
    else if (oddType == "hen1") {
      odd = "H1";
    } else if (oddType == "hen2") {
      odd = "H2";
    }
    else if (oddType.indexOf("odd") != -1) {
      let tmp: string = oddType.substring(oddType.indexOf("odd")+3);
      if (tmp == "0to2")
        odd = "0-2";
      else if (tmp == "3plus")
        odd = "3+";
      else if (tmp == "4plus")
        odd = "4+";
      else
        odd = tmp;
    }else{
      odd = oddType;
    }

    return odd;

  }

}
