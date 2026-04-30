export type GitHubReleaseAsset = {
  name: string;
  size: number;
  contentType: string | null;
  downloadUrl: string;
  downloadCount: number;
};

export type GitHubRelease = {
  name: string;
  tag: string;
  publishedAt: string;
  notes: string;
  isPrerelease: boolean;
  htmlUrl: string;
  assets: GitHubReleaseAsset[];
};

type GitHubReleaseApiAsset = {
  name: string;
  size: number;
  content_type: string | null;
  browser_download_url: string;
  download_count: number;
};

type GitHubReleaseApiItem = {
  name: string | null;
  tag_name: string;
  published_at: string | null;
  body: string | null;
  prerelease: boolean;
  html_url: string;
  assets: GitHubReleaseApiAsset[];
};

export class GitHubReleaseError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "GitHubReleaseError";
    this.status = status;
  }
}

function normalizeRelease(apiRelease: GitHubReleaseApiItem): GitHubRelease {
  return {
    name: apiRelease.name?.trim() || apiRelease.tag_name,
    tag: apiRelease.tag_name,
    publishedAt: apiRelease.published_at ?? "",
    notes: apiRelease.body?.trim() ?? "",
    isPrerelease: apiRelease.prerelease,
    htmlUrl: apiRelease.html_url,
    assets: apiRelease.assets.map((asset) => ({
      name: asset.name,
      size: asset.size,
      contentType: asset.content_type,
      downloadUrl: asset.browser_download_url,
      downloadCount: asset.download_count,
    })),
  };
}

export async function fetchLatestRelease(
  repo: string,
  signal?: AbortSignal,
): Promise<GitHubRelease | null> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/releases?per_page=1`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal,
    },
  );

  if (!response.ok) {
    throw new GitHubReleaseError(
      `GitHub API returned ${response.status}`,
      response.status,
    );
  }

  const releases = (await response.json()) as GitHubReleaseApiItem[];
  const latestRelease = releases[0];

  return latestRelease ? normalizeRelease(latestRelease) : null;
}
