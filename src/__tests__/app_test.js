import orderByProps from '../js/app';
import Bowman from '../js/bowman';

test('check function orderByProps - correct', () => {
  const character = new Bowman('Igor');

  const expected = [
    { key: 'name', value: 'Igor' },
    { key: 'level', value: 1 },
    { key: 'attack', value: 25 },
    { key: 'defence', value: 25 },
    { key: 'health', value: 100 },
    { key: 'type', value: 'Bowman' },
  ];

  expect(orderByProps(character, ['name', 'level'])).toStrictEqual(expected);
});

test('check object properties', () => {
  const character = new Bowman('Igor');
  Bowman.prototype.alive = true;
  const expected = [
    { key: 'name', value: 'Igor' },
    { key: 'level', value: 1 },
    { key: 'alive', value: true },
    { key: 'attack', value: 25 },
    { key: 'defence', value: 25 },
    { key: 'health', value: 100 },
    { key: 'type', value: 'Bowman' },
  ];
  expect(orderByProps(character, ['name', 'level'])).not.toStrictEqual(expected);
});
