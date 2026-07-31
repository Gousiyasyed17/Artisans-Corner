const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");
    console.log(
      "URI:",
      process.env.MONGO_URI.replace(/\/\/(.*?):(.*?)@/, "//*****:*****@")
    );

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);

  } catch (error) {

    console.error("❌ MongoDB Connection Failed");
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);

    process.exit(1);
  }
};

module.exports = connectDB;