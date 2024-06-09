# bUnified

Meet new friends and feel safer when going to local events by checking in with anonymous avatars.

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
