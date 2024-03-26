import createServer from "./app";

const PORT = Number(process.env.PORT) || 5000;

const app = createServer();

async function startServer() {
  const server = app.listen({ port: PORT }, async () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on("SIGINT", () => {
    server.close(() => {
      console.log("Server shut down gracefully");
      process.exit(0);
    });
  });

  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("Server shut down gracefully");
      process.exit(0);
    });
  });
}

startServer().catch((error) => {
  console.error("Error starting server:", error.message);
  process.exit(1);
});
