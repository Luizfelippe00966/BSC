
# BSC

**Generates bulk random Binance Smart Chain (BSC) addresses**

---

## About The Project

This project provides a Node.js script to generate bulk random Binance Smart Chain (BSC) addresses along with their private keys. It is useful for developers and testers who need multiple BSC addresses for testing or development purposes.

---

## Features

- Generate any number of random BSC addresses
- Outputs addresses and private keys in JSON or CSV format
- Easy to use CLI interface
- Uses the `ethers` library for secure wallet generation

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm package manager

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Luizfelippe00966/BSC.git
   cd BSC
   ```

2. Install dependencies:

   ```
   npm install
   ```

---

## Usage

Run the script with Node.js:

```
# Generate 10 addresses (default) and save to JSON file
node generate-bsc-addresses.js

# Generate 100 addresses and save to CSV file
node generate-bsc-addresses.js -n 100 -o addresses.csv
```

### CLI Options

- `-n, --number `: Number of addresses to generate (default: 10)
- `-o, --output `: Output file name (supports `.json` or `.csv`, default: `bsc_addresses.json`)

---

## Example Output

```
[
  {
    "address": "0x1234...abcd",
    "privateKey": "0xabcdef1234567890..."
  },
  {
    "address": "0x5678...efgh",
    "privateKey": "0x123456abcdef7890..."
  }
]
```

---

## Security Notice

- **Keep your private keys secure!** This script generates private keys in plaintext.
- Do not use generated keys for real funds unless you understand the risks and store keys securely.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes, improvements, or new features.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
