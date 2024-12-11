import { ValidatorFn } from "@angular/forms";


export function checkImgUrlValidator(imgControlName: string): ValidatorFn {
    return (control) => {
        const regex = new RegExp(/^https?:\/\/.+/);
        const imgFormControl = control.value;
        
        if (!imgFormControl) {
            return null; 
        }

        const isValidImg = regex.test(imgFormControl);

        return isValidImg ? null : {checkImgUrlValidator: true};
    }
}