export function fizzBuzz(): (string | number)[] {
  const resultArray: (string | number)[] = [];

  return Array(100).join().split(',').map((n, i) => {
    const count = i + 1;
    let result: string | number = "";

    if (count % 3 === 0) { result = `${result}Fizz` };
    if (count % 5 === 0) { result = `${result}Buzz`; }

    return result || count;
  })
}
