import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordConrolName: string, rePasswordControlName: string): ValidatorFn {
    return (control) =>{
        const passwordFormControl = control.get(passwordConrolName);
        const rePasswordFormControl = control.get(rePasswordControlName);

        const arePasswordMatching = passwordFormControl?.value === rePasswordFormControl?.value;

        return arePasswordMatching ? null : {matchPasswordsValidator: true};
    }
}