# Clerk SDK `authenticateRequest` type error

To reproduce:

- Clone this repo
- `pnpm install`
- Open `index.ts`

You should see the type error:

```
Type 'IncomingMessage' is missing the following properties from type 'Request': cache, credentials, destination, integrity, and 14 more.ts(2740)
```
