import * as bin from './bin';
import config from '../../config.json';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin),...Object.keys(config.links)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
