import { Pipe, PipeTransform } from '@angular/core';
import { TicketMatch } from '../models/ticket.model';

@Pipe({
  name: 'mul'
})
export class MulPipe implements PipeTransform {

  transform(matches: TicketMatch[]): number {
    return matches
      .map(match => match.oddValue)
      .reduceRight((acc, next) => acc * next);
  }


}
