import type { Poll } from './datatypes';

const polls: Poll[] = [
  {
    key: 1,
    creator: 0,
    title: 'Favorite Fruit',
    choices: [
      { text: 'Apple', votes: 3 },
      { text: 'Orange', votes: 2 },
    ],
  },
  {
    key: 2,
    creator: 0,
    title: 'Amy Dinner Main Course',
    choices: [
      { text: 'Roast Beef', votes: 3 },
      { text: 'Fried Chicken', votes: 1 },
      { text: 'Stir Fry', votes: 2 },
    ],
  },
];

export function getPolls () {
  return polls;
}

export function getPoll (key) {
  return polls.find ((a) => a.key === key);
}
