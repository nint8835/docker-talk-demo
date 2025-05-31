import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Home } from "./ui/home";

const app = new Hono();

app.get("/", (c) => c.html(<Home />));

const server = serve(app, (info) => {
	console.log(`Listening on http://localhost:${info.port}`);
});

process.on("SIGINT", () => {
	server.close();
	process.exit(0);
});
process.on("SIGTERM", () => {
	server.close((err) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		process.exit(0);
	});
});
