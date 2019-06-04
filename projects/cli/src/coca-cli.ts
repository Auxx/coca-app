#!/usr/bin/env node

import {
  camel, constant, dot,
  header, lower, lcFirst,
  kebab, pascal, path,
  sentence, snake, swap,
  title, upper, ucFirst
} from 'change-case';

const args = process.argv.slice(2);

const operations = {
  camel,
  constant,
  dot,
  header,
  lower,
  lcf: lcFirst,
  kebab,
  pascal,
  path,
  sentence,
  snake,
  swap,
  title,
  upper,
  ucf: ucFirst
};

const clhl = '\x1b[36m';
const clalt = '\x1b[33m';
const clreset = '\x1b[0m';
const example = 'hello world';

function help() {
  const messages = [
    'Coca CLI - character case converter\n\n',
    'Usage:\n',
    `  ${clhl}coca ${clalt}<conversion> ${clreset}<text>\n\n`,
    'Available conversions:\n\n'
  ];

  messages.forEach(line => process.stdout.write(line));
  Object.keys(operations).forEach(op => {
    const o = operations[ op ];
    const tab = op.length < 8 ? '\t\t' : '\t';
    process.stdout.write(`  ${clhl}${op}${clreset}${tab}-\t${example} > ${clalt}${o(example)}\n`);
  });
  process.exit();
}

if (args.length !== 2) {
  help();
}

const operation = operations.hasOwnProperty(args[ 0 ]) ? operations[ args[ 0 ] ] : null;

if (operation === null) {
  help();
}

process.stdout.write(`${operation(args[ 1 ])}\n`);
