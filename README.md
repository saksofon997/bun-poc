# Elysia with Bun runtime

## Getting Started

To get started, install the dependencies:

```bash
bun install
```

### Environment variables

Environment variables should be stored in a `.env` file in the root folder.

## Development

To start the development server run:

```bash
bun run dev
```

## Running

To start the server on staging or production run:

```bash
bun run start
```

## Using Docker

```bash
$ docker build -t bunified:<version> .

$ docker run -d -p 3001:3001 --name bunified bunified:<version>
```
