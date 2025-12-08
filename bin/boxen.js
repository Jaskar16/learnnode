import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen(chalk.red('unicorn'), {padding: 1}));

console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));

console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center'}));

// 4. Ümar raam + sinine tekst
console.log(
  boxen(chalk.blue('blue unicorn'), {
    padding: 1,
    borderStyle: 'round',
    borderColor: 'blue'
  })
);

// 5. Paks raam + rohelised toonid
console.log(
  boxen(chalk.greenBright('forest unicorn'), {
    padding: 2,
    borderStyle: 'bold',
    borderColor: 'green'
  })
);

// 6. Tsentreeritud pealkirjaga kast
console.log(
  boxen('sparkling unicorn', {
    padding: 1,
    title: 'shine',
    titleAlignment: 'center',
    borderStyle: 'doubleSingle',
    borderColor: 'magenta'
  })
);

// 7. Kollane retro-stiil ASCII raam
console.log(
  boxen(chalk.yellow('retro unicorn'), {
    padding: 1,
    borderStyle: 'classic',
    borderColor: 'yellow'
  })
);