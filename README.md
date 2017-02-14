# baas
> boolean as a service

## Usage

Run `node index.js` or `npm start` to start the server. The `baas` service will run on port 8000 by default.

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
