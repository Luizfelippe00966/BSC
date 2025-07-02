#!/usr/bin/env node

const { ethers } = require('ethers');
const { program } = require('commander');
const fs = require('fs');

// CLI options
program
  .version('1.0.0')
  .description('Bulk generate random BSC addresses')
  .option('-n, --number <number>', 'Number of addresses to generate', '10')
  .option('-o, --output <file>', 'Output file (JSON or CSV)', 'bsc_addresses.json')
  .parse(process.argv);

const options = program.opts();
const count = parseInt(options.number, 10);
const outputFile = options.output;

// Generate random wallets
function generateWallets(num) {
  const wallets = [];
  for (let i = 0; i < num; i++) {
    const wallet = ethers.Wallet.createRandom();
    wallets.push({
      address: wallet.address,
      privateKey: wallet.privateKey,
    });
  }
  return wallets;
}

// Save wallets to JSON file
function saveAsJson(wallets, filename) {
  fs.writeFileSync(filename, JSON.stringify(wallets, null, 2));
  console.log(`Saved ${wallets.length} addresses to ${filename}`);
}

// Save wallets to CSV file
function saveAsCsv(wallets, filename) {
  const header = 'address,privateKey\n';
  const rows = wallets.map(w => `${w.address},${w.privateKey}`).join('\n');
  fs.writeFileSync(filename, header + rows);
  console.log(`Saved ${wallets.length} addresses to ${filename}`);
}

async function main() {
  if (isNaN(count) || count <= 0) {
    console.error('Please specify a valid number of addresses to generate.');
    process.exit(1);
  }

  const wallets = generateWallets(count);

  if (outputFile.endsWith('.csv')) {
    saveAsCsv(wallets, outputFile);
  } else {
    saveAsJson(wallets, outputFile);
  }
}

main();
