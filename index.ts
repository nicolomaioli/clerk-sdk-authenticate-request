import http from "node:http";
import { clerkClient } from "@clerk/clerk-sdk-node";

const server = http.createServer((req, res) => {
  const { isSignedIn } = clerkClient.authenticateRequest({
    request: req,
  });

  if (!isSignedIn) {
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("Unauthorized\n");
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

server.listen(8080);
