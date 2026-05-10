#!/usr/bin/env node
/**
 * CLI entry point for brand-spec-validate.
 *
 * Exit codes:
 *   0 — no errors
 *   1 — at least one validation error
 *   2 — validator failed (could not load spec or read brand repo)
 */

import path from 'node:path';
import { Command } from 'commander';
import { validateBrand } from './validator.js';
import { formatHuman, formatJson } from './reporter.js';
import { vendoredSpecPath } from './schema/load.js';

const program = new Command();

program
  .name('brand-spec-validate')
  .description('Validate a brand repo against gramatr/brand-spec v1.2')
  .argument('<brand-path>', 'path to the brand repo to validate')
  .option(
    '--spec <path>',
    'override path to a checkout of the gramatr/brand-spec repo (defaults to the vendored copy that ships with this package)',
  )
  .option('--format <format>', 'output format: human | json', 'human')
  .option('--quiet', 'suppress warnings; show errors only', false)
  .option('--no-freshness', 'skip freshness warning rules')
  .action(async (brandPath: string, opts: ProgOpts) => {
    try {
      const result = await validateBrand(path.resolve(brandPath), {
        specPath: opts.spec ? path.resolve(opts.spec) : vendoredSpecPath(),
        freshness: opts.freshness,
      });
      if (opts.format === 'json') {
        console.log(formatJson(result));
      } else {
        console.log(formatHuman(result, { quiet: opts.quiet }));
      }
      process.exit(result.errors.length > 0 ? 1 : 0);
    } catch (err) {
      console.error(`error: ${(err as Error).message}`);
      process.exit(2);
    }
  });

interface ProgOpts {
  spec?: string;
  format: 'human' | 'json';
  quiet: boolean;
  freshness: boolean;
}

program.parseAsync(process.argv);
