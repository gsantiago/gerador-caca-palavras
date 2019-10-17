export type Mode = 'horizontal' | 'vertical' | 'diagonal' | 'reversed'

export type Point = [ number, number ]

export interface Direction {
  direction: Point
  modes: Mode[]
}

export const UP: Direction = {
  direction: [0, -1],
  modes: ['reversed', 'vertical']
}

export const DOWN: Direction = {
  direction: [0, 1],
  modes: ['vertical']
}

export const LEFT: Direction = {
  direction: [-1, 0],
  modes: ['reversed', 'horizontal']
}

export const LEFT_UP: Direction = {
  direction: [-1, -1],
  modes: ['reversed', 'diagonal']
}

export const LEFT_DOWN: Direction = {
  direction: [-1, 1],
  modes: ['reversed', 'diagonal']
}

export const RIGHT: Direction = {
  direction: [1, 0],
  modes: ['horizontal']
}

export const RIGHT_UP: Direction = {
  direction: [1, -1],
  modes: ['diagonal']
}

export const RIGHT_DOWN: Direction = {
  direction: [1, 1],
  modes: ['diagonal']
}
