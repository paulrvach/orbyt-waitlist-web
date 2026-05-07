import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  downloadClicks: defineTable({
    assetKey: v.string(),
    label: v.string(),
    platform: v.string(),
    assetName: v.string(),
    downloadUrl: v.string(),
    releaseTag: v.string(),
    count: v.number(),
  }).index("by_asset_key", ["assetKey"]),
});
