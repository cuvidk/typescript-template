import 'dotenv/config';

enum Greeting {
  Usual = 'Hello',
  Casual = 'Hi',
  NoFsGiven = 'Norok',
}

interface Person {
  name: string;
  age: number;
}

const greet = (greet: Greeting, person: Person): string => {
  return `${greet} ${person.name}. You look awfull for a ${person.age} years old.`;
};

const main = () => {
  console.log(
    greet(Greeting.NoFsGiven, { name: process.env.NAME ?? 'teluap', age: 99 }),
  );
  const p: Person = { name: '123', age: 12 };
  greet(Greeting.Casual, p);
};

main();
