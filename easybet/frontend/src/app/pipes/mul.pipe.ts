import { Pipe, PipeTransform } from '@angular/core';
import { TicketMatch } from '../models/ticket.model';

@Pipe({
  name: 'mul',
  pure: false
})
export class MulPipe implements PipeTransform {

  transform(matches: TicketMatch[]): number {
    return matches
      .map(match => match.oddValue)
      .reduceRight((acc, next) => Number((acc * next).toFixed(5)));
  }

}
