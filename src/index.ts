import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

serve(app, (info) => {
	console.log(`Listening on http://localhost:${info.port}`);
});
