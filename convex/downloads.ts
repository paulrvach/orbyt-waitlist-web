import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const getCounts = query({
  args: {
    assetKeys: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const entries = await Promise.all(
      args.assetKeys.map(async (assetKey) => {
        const row = await ctx.db
          .query("downloadClicks")
          .withIndex("by_asset_key", (q) => q.eq("assetKey", assetKey))
          .unique();

        return [assetKey, row?.count ?? 0] as const;
      }),
    );

    return Object.fromEntries(entries);
  },
});

export const recordClick = mutation({
  args: {
    assetKey: v.string(),
    label: v.string(),
    platform: v.string(),
    assetName: v.string(),
    downloadUrl: v.string(),
    releaseTag: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("downloadClicks")
      .withIndex("by_asset_key", (q) => q.eq("assetKey", args.assetKey))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        count: existing.count + 1,
        label: args.label,
        platform: args.platform,
        assetName: args.assetName,
        downloadUrl: args.downloadUrl,
        releaseTag: args.releaseTag,
      });
      return existing.count + 1;
    }

    await ctx.db.insert("downloadClicks", {
      ...args,
      count: 1,
    });
    return 1;
  },
});
