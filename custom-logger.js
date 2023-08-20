const winston = require("winston");
const chalk = require("chalk");

// Define custom colors using Chalk
const customColors = {
    info: "blue",
    warn: "yellow",
    error: "red",
    debug: "magenta",
};

// Create a Chalk colorizer using the custom colors
const colorizer = winston.format.colorize({ colors: customColors });

// Create a custom format that applies Chalk colors
const customFormat = winston.format.printf(({ timestamp, level, message }) => {
    // Make color type string to match with level
    const infoType = chalk.blue("info") === level;
    const warnType = chalk.yellow("warn") === level;
    const errorType = chalk.red("error") === level;

    // Apply Chalk color based on log level
    const infoColorTime = chalk.blueBright(`${timestamp}`);
    const warnColorTime = chalk.yellowBright(`${timestamp}`);
    const errorColorTime = chalk.redBright(`${timestamp}`);
    const debugColorTime = chalk.magentaBright(`${timestamp}`);

    // Apply Chalk color on log
    const infoColorValue = chalk.blueBright("INFO");
    const warnColorValue = chalk.yellowBright("WARN");
    const errorColorValue = chalk.redBright("ERROR");
    const debugColorValue = chalk.magentaBright("DEBUG");

    // Apply Chalk color based on log level
    const infoColorMessage = chalk.blueBright(`${message}`);
    const warnColorMessage = chalk.yellowBright(`${message}`);
    const errorColorMessage = chalk.redBright(`${message}`);
    const debugColorMessage = chalk.magentaBright(`${message}`);

    // Apply timestamp color
    const coloredTimestamp = infoType ? infoColorTime : warnType ? warnColorTime : errorType ? errorColorTime : debugColorTime;

    // Apply log color
    const coloredLevel = infoType ? infoColorValue : warnType ? warnColorValue : errorType ? errorColorValue : debugColorValue;

    // Add message color
    const coloredMessage = infoType ? infoColorMessage : warnType ? warnColorMessage : errorType ? errorColorMessage : debugColorMessage;

    return `» [${coloredTimestamp} − ${coloredLevel}] − ${coloredMessage}`;
});

// Create the Winston logger
const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp({ format: () => new Date().toLocaleTimeString() }),
        colorizer, // Apply Chalk colors
        customFormat // Custom formatting with Chalk colors
    ),
    transports: [new winston.transports.Console()],
});

module.exports = logger;
