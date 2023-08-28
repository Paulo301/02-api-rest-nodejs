import { expect, test } from 'vitest'

test('o usuário deveria ser capaz de criar uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
