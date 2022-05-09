import { program } from 'commander';
import AutoUpgradeAction from './AutoUpgradeAction';

// Proxy frontends
program
  .command('upgrade')
  .description('upgrade genially-cli to the lastest version')
  .action(AutoUpgradeAction);
