import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TicketInfoValidators {

    static moneyToGiveInRightRange(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as number) < 20) {
            return {moneyToGiveInRightRange: true};
        }
        return null;
    }

    static numberOfGamesInRightRange(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as number) > 50) {
            return {numberOfGamesInRightRange: true};
        }
        return null;
    }

}