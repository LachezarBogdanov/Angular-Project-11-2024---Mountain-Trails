import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { checkImgUrlValidator } from '../utils/check-img.validator';

@Directive({
  selector: '[appImage]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: ImageDirective
  }]
})
export class ImageDirective implements Validator {
  @Input('appImage') imgControlName!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.imgControlName) {
      throw new Error("The 'appImage' directive requires an input specifying the control name.");
    }

    const validatorFn = checkImgUrlValidator(this.imgControlName);
    return validatorFn(control);
  }
}
