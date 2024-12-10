import { ValidatorFn } from "@angular/forms";


export function checkImgUrlValidator(imgControlName: string): ValidatorFn {
    return (control) => {
        const regex = new RegExp(/^https?:\/\/\S*/);
        const imgFormControl = control.get(imgControlName)?.value;

        const isValidImg = regex.test(imgFormControl);

        return isValidImg ? null : {checkImgUrlValidator: true};
    }
}