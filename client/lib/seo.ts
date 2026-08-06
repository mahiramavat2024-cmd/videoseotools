export function generateTitles(keyword: string) {
  if (!keyword.trim()) return [];

  const k = keyword.trim();

  return [
    `${k} - Complete Beginner's Guide`,
    `Top 10 ${k} Tips You Must Know`,
    `${k} Explained in Simple Words`,
    `How to Master ${k} in 2026`,
    `${k} Tutorial for Beginners`,
    `${k} Secrets Nobody Talks About`,
    `Best ${k} Strategy That Actually Works`,
    `${k}: Everything You Need to Know`,
    `How I Grew Using ${k}`,
    `The Ultimate ${k} Guide`
  ];
}