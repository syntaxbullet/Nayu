import { createRouter } from "./context";
import { z } from "zod";

export const collectionRouter = createRouter().query("collection.own.all", {
  async resolve({ ctx }) {
    return await ctx.prisma.collection.findMany({
      where: { userId: ctx.session?.user?.id },
      include: { notes: true },
    });
  },
});
