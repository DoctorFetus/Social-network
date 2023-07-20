export const required = (value: string) => {
    if (value) return undefined
    return "Filed is required"
}

export const maxLength = (amountOfSymbols: number) =>  (value: string) => {
    if (value.length < amountOfSymbols) return undefined
    return `Max length is ${amountOfSymbols} symbols`
}