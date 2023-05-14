import { Props } from "./types"

const generateConstructorParameter = (json: Props) => {
  return Object.entries(json).map((element) => `${element['0']}`).reduce((acc, curr, index) => index === 0 ? curr : `${acc}, ${curr}`, '')
}

export default generateConstructorParameter