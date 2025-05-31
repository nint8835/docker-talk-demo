import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Home } from "./ui/home";

const app = new Hono();

app.get("/", (c) => c.html(<Home />));

serve(app, (info) => {
	console.log(`Listening on http://localhost:${info.port}`);
});
