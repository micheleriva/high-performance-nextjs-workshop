import { setTimeout } from 'node:timers/promises';
import data from '../../data/products.json';

function randomLatency() {
  return Math.floor(Math.random() * 5000);
}

export default async function handler(req, res) {
  await setTimeout(randomLatency());
  res.json(data);
}
