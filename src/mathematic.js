export const generateRandomNumber = (min = 0, max = 100) => Math.floor(
  min + Math.random() * (max + 1 - min),
)

export const isEval = (number) => number % 2 === 0

export const isPrime = (number) => {
  if (number % 2 === 0) {
    return number === 2
  }

  let divider = 3
  while (divider * divider <= number && number % divider !== 0) {
    divider += 2
  }

  return divider * divider > number
}

export const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b
  }

  if (a > b) {
    return getGcd(a % b, b)
  }

  return getGcd(a, b % a)
}

export const generateArithmeticProgression = (length = 10, step = 4) => {
  const iter = (acc) => {
    if (acc.length >= length) {
      return acc
    }

    return iter([...acc, acc[acc.length - 1] + step])
  }

  return iter([generateRandomNumber(0, 100)])
}
