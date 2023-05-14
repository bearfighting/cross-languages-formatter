import { Props } from "./types"

const generateConstructorBody = (json: Props) => 
  Object.entries(json).map((element) => `this.${element['0']} = ${element['0']}`).reduce((acc, curr, index) => index===0 ? curr : `${acc}\n    ${curr}`, '')


export default generateConstructorBody