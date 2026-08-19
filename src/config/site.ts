/**
 * Site configuration — the single source of truth for game-specific metadata.
 *
 * 👉 APPLY TEMPLATE: Change every field here when building a new game wiki.
 * This is part of the CONFIG LAYER — framework code reads from here, never the reverse.
 */

export interface SiteConfig {
  /** Full site name, used in <title> suffix and Organization JSON-LD. e.g. "Anvil Quest Wiki" */
  name: string;
  /** Short name for PWA manifest and mobile logo. e.g. "AQ Wiki" */
  shortName: string;
  /** Site description for Organization JSON-LD and og:site_name. */
  description: string;
  /** Domain without protocol or trailing slash. e.g. "anvilquestwiki.wiki" */
  domain: string;
  /** Hero tagline shown under the site title. */
  tagline: string;
  /** Copyright / legal disclaimer line shown in footer. */
  legalNotice: string;
  social: {
    /** Official game website URL (the game itself, not the wiki). */
    official: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
  };
  /**
   * Canonical URLs about the GAME (Steam page, official site, Wikipedia entry…).
   * Emitted as Organization JSON-LD `sameAs` — helps Google / AI engines link
   * this wiki to the game's knowledge-graph entity.
   */
  sameAs?: string[];
  game: {
    /** Full game name. */
    name: string;
    /** Platform: "Roblox" | "Steam" | "Epic Games" | "Mobile" | ... */
    platform: string;
    /** Developer / studio name. */
    developer: string;
    /** Genre description. */
    genre: string;
    /** ISO release date (optional). */
    releaseDate?: string;
  };
  /**
   * Dimensions of the default OG/Twitter share image (public/images/big-walk-hero.webp).
   * Emitted as og:image:width / og:image:height so social crawlers can render
   * the share card without downloading the image first.
   */
  ogImageWidth: number;
  ogImageHeight: number;
  /** Default author name for articles without an explicit `author` in frontmatter (E-E-A-T signal). */
  defaultAuthor?: string;
}

export const site: SiteConfig = {
  name: 'Big Walk Hub Wiki',
  shortName: 'Big Walk Hub',
  description:
    'Complete Big Walk Wiki featuring walkthroughs, puzzle solutions, maps, achievements, trophies, multiplayer guides, crossplay information and everything you need.',
  domain: 'bigwalkhub.wiki',
  tagline: 'The Ultimate Big Walk Wiki & Guide',
  legalNotice:
    'Big Walk Hub Wiki is a fan-made community site. Not affiliated with or endorsed by the game developer.',
  social: {
    official: 'https://bigwalk.game/',
  },
  sameAs: [
    'https://bigwalk.game/',
    'https://bigwalk.game/faq/',
    'https://store.steampowered.com/app/1478500/Big_Walk/',
  ],
  game: {
    name: 'Big Walk',
    platform: 'Windows, macOS, PS5, Switch 2',
    developer: 'House House / Panic',
    genre: 'Adventure / Puzzle / Co-op',
    releaseDate: '2026-08-04',
  },
  // Official Big Walk screenshot used as the default share image.
  ogImageWidth: 1280,
  ogImageHeight: 720,
};

/** Absolute site URL (no trailing slash). Falls back to the Astro `site` config. */
export const siteUrl: string = (process.env.SITE_URL || `https://${site.domain}`).replace(
  /\/$/,
  '',
);
