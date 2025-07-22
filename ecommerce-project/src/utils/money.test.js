import {it, expect, describe} from 'vitest'
import money from './money'

describe('formatMoney', () => {

it('fomats 1999 cents as $19.99', () => {
  expect(money(1999)).toBe('$19.99')
})

it('display 2 decimal places', () => {
  expect(money(1090)).toBe('$10.90')
  expect(money(100)).toBe('$1.00')
})
})