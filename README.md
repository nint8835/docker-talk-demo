# docker-talk-demo
Demo app for my intro to containers talk.

This repo contains a simple Node web app, using Hono, which returns a response containing the process ID of the Node process, and the hostname of the computer the process is running on. This should allow easily being able to tell whether the response is coming from the host machine or a Docker container.

## Running

```bash
npm install
npm run start
```

## Containerizing

To see how this app can be turned into a container, refer to the [`dockerized` branch](https://github.com/nint8835/docker-talk-demo/tree/dockerized).
