import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import { notifyOwner } from "./_core/notification";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(),
}));

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should submit contact form with valid data", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const mockNotifyOwner = vi.mocked(notifyOwner);
    mockNotifyOwner.mockResolvedValueOnce(true);

    const result = await caller.contact.submit({
      email: "test@example.com",
      name: "Test User",
      subject: "Test Subject",
      message: "Test message content",
    });

    expect(result.success).toBe(true);
    expect(mockNotifyOwner).toHaveBeenCalledOnce();
    expect(mockNotifyOwner).toHaveBeenCalledWith({
      title: "New contact form submission from Test User",
      content: expect.stringContaining("test@example.com"),
    });
  });

  it("should reject invalid email", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    await expect(
      caller.contact.submit({
        email: "invalid-email",
        name: "Test User",
        subject: "Test Subject",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject empty name", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    await expect(
      caller.contact.submit({
        email: "test@example.com",
        name: "",
        subject: "Test Subject",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject empty subject", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    await expect(
      caller.contact.submit({
        email: "test@example.com",
        name: "Test User",
        subject: "",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject empty message", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    await expect(
      caller.contact.submit({
        email: "test@example.com",
        name: "Test User",
        subject: "Test Subject",
        message: "",
      })
    ).rejects.toThrow();
  });

  it("should handle notifyOwner failure gracefully", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const mockNotifyOwner = vi.mocked(notifyOwner);
    mockNotifyOwner.mockRejectedValueOnce(new Error("Notification service error"));

    await expect(
      caller.contact.submit({
        email: "test@example.com",
        name: "Test User",
        subject: "Test Subject",
        message: "Test message",
      })
    ).rejects.toThrow("Failed to send message");
  });
});
