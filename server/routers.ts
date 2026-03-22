import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          email: z.string().email("Valid email required"),
          name: z.string().min(1, "Name required"),
          subject: z.string().min(1, "Subject required"),
          message: z.string().min(1, "Message required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Send notification to owner with contact form details
          // Email will be sent to info@KAIB.jp
          await notifyOwner({
            title: `New contact form submission from ${input.name}`,
            content: `From: ${input.name}\nEmail: ${input.email}\nSubject: ${input.subject}\n\nMessage:\n${input.message}\n\n---\nPlease reply to: ${input.email}`,
          });
          return { success: true };
        } catch (error) {
          console.error("Failed to send contact form:", error);
          throw new Error("Failed to send message");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
