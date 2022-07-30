// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { collectionRouter } from "./collection";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge(collectionRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
