const winston = require("winston");
const chalk = require("chalk");

// Define custom colors using Chalk
const customColors = {
    info: "blue",
    warn: "yellow",
    error: "red",
};

// Create a Chalk colorizer using the custom colors
const colorizer = winston.format.colorize({ colors: customColors });

// Create a custom Chalk logger
const chalkLogger = {
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
};

// Create a custom format that applies Chalk colors
const customFormat = winston.format.printf(({ timestamp, level, message }) => {
    // Apply Chalk color based on log level
    const coloredLevel = chalkLogger[level](`[${level}]`);
    return `${timestamp} ${coloredLevel} ${message}`;
});

// Create the Winston logger
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({ format: () => new Date().toLocaleTimeString() }),
        colorizer, // Apply Chalk colors
        customFormat // Custom formatting with Chalk colors
    ),
    transports: [new winston.transports.Console()],
});

module.exports = logger;
