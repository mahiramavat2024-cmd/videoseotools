/* =========================================================
   YOUTUBE SEO SCORE
   ========================================================= */

export function getSeoScore(keyword: string): number {
  const text = keyword.trim().toLowerCase();

  if (!text) return 0;

  const words = text.split(/\s+/).filter(Boolean);

  let score = 30;

  /* ---------------------------------
     1. Keyword length
  --------------------------------- */

  if (words.length === 2) {
    score += 5;
  } else if (words.length === 3) {
    score += 10;
  } else if (words.length === 4) {
    score += 14;
  } else if (words.length >= 5) {
    score += 17;
  }

  /* ---------------------------------
     2. Long-tail keyword bonus
  --------------------------------- */

  if (words.length >= 4) {
    score += 8;
  }

  /* ---------------------------------
     3. YouTube-related terms
  --------------------------------- */

  const youtubeTerms = [
    "youtube",
    "video",
    "channel",
    "subscriber",
    "subscribers",
    "views",
    "creator",
    "content",
    "seo",
  ];

  const youtubeMatches = youtubeTerms.filter((term) =>
    text.includes(term)
  ).length;

  score += Math.min(youtubeMatches * 4, 16);

  /* ---------------------------------
     4. Search intent words
  --------------------------------- */

  const intentWords = [
    "how",
    "what",
    "why",
    "best",
    "tips",
    "guide",
    "tutorial",
    "ways",
    "strategy",
    "ideas",
    "steps",
    "learn",
  ];

  const intentMatches = intentWords.filter((word) =>
    words.includes(word)
  ).length;

  score += Math.min(intentMatches * 5, 15);

  /* ---------------------------------
     5. Action / growth keywords
  --------------------------------- */

  const actionWords = [
    "grow",
    "increase",
    "get",
    "gain",
    "boost",
    "improve",
    "build",
    "create",
    "increase",
    "optimize",
    "rank",
  ];

  const actionMatches = actionWords.filter((word) =>
    words.includes(word)
  ).length;

  score += Math.min(actionMatches * 4, 12);

  /* ---------------------------------
     6. Specificity bonus
  --------------------------------- */

  const specificTerms = [
    "fast",
    "free",
    "2026",
    "beginner",
    "beginners",
    "step",
    "step-by-step",
    "without",
    "for beginners",
  ];

  const specificMatches = specificTerms.filter((term) =>
    text.includes(term)
  ).length;

  score += Math.min(specificMatches * 3, 9);

  /* ---------------------------------
     7. Number bonus
  --------------------------------- */

  if (/\b\d+\b/.test(text)) {
    score += 4;
  }

  /* ---------------------------------
     8. Natural keyword structure
  --------------------------------- */

  if (words.length >= 3 && words.length <= 7) {
    score += 5;
  }

  /* ---------------------------------
     9. Prevent excessive length
  --------------------------------- */

  if (words.length > 10) {
    score -= 8;
  }

  /* ---------------------------------
     Final score
  --------------------------------- */

  return Math.max(1, Math.min(100, score));
}


/* =========================================================
   CTR POTENTIAL
   ========================================================= */

export function getCTR(score: number): string {
  if (score >= 85) {
    return "Excellent 🚀";
  }

  if (score >= 70) {
    return "Very Good 🔥";
  }

  if (score >= 55) {
    return "Good 👍";
  }

  if (score >= 40) {
    return "Average";
  }

  return "Low";
}