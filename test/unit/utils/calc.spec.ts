import {
    sum,
    multiply,
    divide,
    subtract,
    isNumber,
} from '../../../src/utils/calc'
import { expect, test } from 'vitest'
import { ErrorTypes } from '../../../src/enums/errors'

test('sum', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-10, -20)).toBe(-30)
    expect(sum(10, -20)).toBe(-10)
    expect(sum(-10, 5)).toBe(-5)

    const stringAsNum1 = '12aa' as unknown as number
    const stringAsNum2 = 'aa30' as unknown as number
    expect(() => sum(stringAsNum1, 2)).toThrowError(ErrorTypes.InvalidArguments)
})

test('multiply', () => {
    expect(multiply(1, 2)).toBe(2)
    expect(multiply(-10, -20)).toBe(200)
    expect(multiply(10, -20)).toBe(-200)
    expect(multiply(-10, 5)).toBe(-50)

    const stringAsNum1 = '12aa' as unknown as number
    const stringAsNum2 = 'aa30' as unknown as number
    expect(() => multiply(stringAsNum1, 2)).toThrowError(
        ErrorTypes.InvalidArguments
    )
})

test('divide', () => {
    expect(divide(4, 2)).toBe(2)
    expect(divide(2, 4)).toBe(0.5)
    expect(divide(-2, 4)).toBe(-0.5)

    const stringAsNum1 = '12aa' as unknown as number
    const stringAsNum2 = 'aa30' as unknown as number
    expect(() => divide(stringAsNum1, 2)).toThrowError(
        ErrorTypes.InvalidArguments
    )
})

test('subtract', () => {
    expect(subtract(4, 2)).toBe(2)
    expect(subtract(2, 4)).toBe(-2)
    expect(subtract(-2, 4)).toBe(-6)
    expect(subtract(-2, -4)).toBe(2)
    expect(subtract(2, -4)).toBe(6)

    const stringAsNum1 = '12aa' as unknown as number
    const stringAsNum2 = 'aa30' as unknown as number
    expect(() => subtract(stringAsNum1, 2)).toThrowError(
        ErrorTypes.InvalidArguments
    )
})

test('isNumber', () => {
    expect(isNumber(4)).toBe(true)
    expect(isNumber('4')).toBe(false)
    expect(isNumber('4' as unknown as number)).toBe(false)
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber(Infinity)).toBe(true)
})
