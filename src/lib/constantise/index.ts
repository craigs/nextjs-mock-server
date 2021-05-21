import { toPascalCase } from "../toPascalCase"

export const constantise = (str: string) => {
  const segment = str.split('.')[0]

  return toPascalCase(segment)
}
