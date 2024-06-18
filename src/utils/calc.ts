import { ErrorTypes } from '../enums/errors'

export function sum(num1: number, num2: number) {
    if (!isNumber(num1) || !isNumber(num2)) {
        throw new Error(ErrorTypes.InvalidArguments)
    }

    return num1 + num2
}

export function multiply(num1: number, num2: number) {
    if (!isNumber(num1) || !isNumber(num2)) {
        throw new Error(ErrorTypes.InvalidArguments)
    }

    return num1 * num2
}

export function divide(num1: number, num2: number) {
    if (!isNumber(num1) || !isNumber(num2)) {
        throw new Error(ErrorTypes.InvalidArguments)
    }

    return num1 / num2
}

export function subtract(num1: number, num2: number) {
    if (!isNumber(num1) || !isNumber(num2)) {
        throw new Error(ErrorTypes.InvalidArguments)
    }

    return num1 - num2
}

export function isNumber(number: any) {
    if (isNaN(number)) return false

    return typeof number === 'number'
}
