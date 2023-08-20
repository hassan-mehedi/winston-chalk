# winston-chalk

[![npm version](https://badge.fury.io/js/winston-chalk.svg)](https://badge.fury.io/js/winston-chalk)
[![GitHub license](https://img.shields.io/github/license/hassan-mehedi/winston-chalk.svg)](https://github.com/hassan-mehedi/winston-chalk/blob/main/LICENSE)

**winston-chalk** is a custom logger module that combines the functionality of the [Winston](https://github.com/winstonjs/winston) logging library with the colorful text formatting of [Chalk](https://github.com/chalk/chalk). It allows you to log messages with different severity levels and adds colors to make your logs more visually appealing.

## Installation

You can install **winston-chalk** using npm or yarn:

```bash
npm install winston-chalk
```

or

```bash
yarn add winston-chalk
```

## Usage

Here's how you can use **winston-chalk** in your Node.js applications:

```javascript
const logger = require("winston-chalk");

logger.info("This is an info message.");
logger.warn("This is a warning message.");
logger.error("This is an error message.");
```

By default, **winston-chalk** will colorize log messages based on their severity level (info: blue, warn: yellow, error: red) to make it easier to distinguish between different types of messages.

## Customization

You can customize the colors and formatting of log messages by modifying the Chalk colorizer and custom formatting in the `custom-logger.js` file.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## Issues

If you encounter any issues or have questions about this package, please feel free to [open an issue](https://github.com/your-github-username/winston-chalk/issues) on GitHub.

## Author

**winston-chalk** is maintained by [Mehedi Hassan](https://github.com/hassan-mehedi).

## Acknowledgments

-   [Winston](https://github.com/winstonjs/winston) - A versatile logging library for Node.js.
-   [Chalk](https://github.com/chalk/chalk) - Terminal string styling for Node.js.

Thank you for using **winston-chalk**!
