import generateConstructorBody from "./ganerate-constructor-body"
import generateConstructorParameter from "./generate-constructor-parameter"
import { Props } from "./types"

const jsonToJsConverter = (json: Props, name: string) => {
  return `class ${name.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')} {
  constructor(${generateConstructorParameter(json)}) {
    ${generateConstructorBody(json)}
  }
}
`
}

export default jsonToJsConverter