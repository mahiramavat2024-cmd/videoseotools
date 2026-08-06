export function getSeoScore(title: string) {
  let score = 40;

  if (title.length >= 45 && title.length <= 60) score += 25;

  if (/\d/.test(title)) score += 15;

  if (
    /(Best|Ultimate|Secrets|Guide|Top|How|Why)/i.test(title)
  ) {
    score += 20;
  }

  if (score > 100) score = 100;

  return score;
}

export function getCTR(score: number) {
  if (score >= 90) return "Excellent 🔥";
  if (score >= 75) return "High 🚀";
  if (score >= 60) return "Good 👍";
  return "Average";
}