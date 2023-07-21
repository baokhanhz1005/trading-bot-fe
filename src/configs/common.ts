import { TSiteConfig } from "./types";

declare var SITE_CONFIG: TSiteConfig;

export const API_URL = SITE_CONFIG.SITE_URL || process.env.SITE_URL;
