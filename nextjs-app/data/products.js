import { setTimeout } from 'node:timers/promises';
import { products } from './products.json';

function randomLatency() {
  return Math.floor(Math.random() * 5000);
}

export async function getProducts() {
  await setTimeout(randomLatency());

  return products;
}
