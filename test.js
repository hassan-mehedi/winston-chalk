const logger = require("./index");

console.log();
logger.info("🚀 Server started on port 3000");
logger.warn("⚠️  Warning: Disk space is running low");
logger.error("❌ Error: Database connection failed");
logger.debug("🔍 Debugging information: ...");
console.log();
