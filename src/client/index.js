import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { performAction } from './js/app'

import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/form.scss"
import "./styles/footer.scss"
import "./styles/header.scss"


let d = new Date();
let today = d.getFullYear() +  '-' + 0+(d.getMonth()+1) + '-' + (d.getDate() +1);

document.getElementById("departDate").setAttribute("min", today);
document.getElementById("departDate").setAttribute("value", today);


export {
    checkForName,
    handleSubmit,
    performAction
}