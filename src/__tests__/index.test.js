/* eslint-disable no-undef */
import orderByProps from '../index';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('sorting', () => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

const object = {
  type: 'player',
};

const player = Object.create(object);
player.name = 'мечник';
player.health = 10;
player.level = 2;
player.attack = 80;
player.defence = 40;

test('if object was created with Object.create', () => {
  expect(orderByProps(player, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
