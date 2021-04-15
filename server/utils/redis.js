const Redis = require('redis');
const {
  promisify
} = require('util');
const log = require('./log');

const client = Redis.createClient({
  host: '106.13.233.32',
  port: 6379,
  password: 'xq27892789'
});

const get = promisify(client.get)
  .bind(client);
const set = promisify(client.set)
  .bind(client);
const del = promisify(client.del)
  .bind(client);

client.on('connect', () => {
  log.success('Redis: connect success');
});

client.on('reconnecting', () => {
  log.info('Redis: reconnecting...');
});

client.on('error', err => {
  log.error(err);
});

module.exports = {
  get,
  set,
  del
};
