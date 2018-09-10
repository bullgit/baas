# baas
> boolean as a service

## Usage

Run `node index.js` or `npm start` to start the server. The `baas` service will
run on port 8000 by default. You can also use the Docker Image
[`kevingimbel/baas`](https://hub.docker.com/r/kevingimbel/baas). See the Docker
description below for more information.

## Config

Inside `config.js` a port can be specified. This is the port the HTTP Server will bind to.

## HTTP API

### `/true`

Returns a "true" boolean in JSON.

```json
{"boolean": true}
```

### `/false`

Returns a "false" boolean in JSON.

```json
{"boolean": false}
```

### `/random`

Returns a random boolean in JSON.

Response:
_Can be true or false_

```json
{"boolean": true}
```

```json
{"boolean": false}
```

All other requests will return the default `baas` description.

```json
{
  "baas": "boolean as a service",
  "endpoints": {
    "/true": "returns true",
    "/false": "returns false",
    "/random": "returns random boolean"
  },
  "boolean": "none"
}
```

## Docker 

`baas` is available as Docker image on Docker Hub at
[kevingimbel/baas](https://hub.docker.com/r/kevingimbel/baas). This is the
official Docker image for baas. 

### Usage

The Docker image uses the default `config.js` file and exposes port 8000. To
usea different port, run the image with the `-p` flag like shown below.

```sh
$ docker run --rm -d -p "1337:8000" kevingimbel/baas
```

The above command will make `baas` available at port 1337. Open `localhost:1337`
to see the baas default page.


Ty: is a test direct - shitgit

Addy Osmani: i am victim

Ty: is a test bug
