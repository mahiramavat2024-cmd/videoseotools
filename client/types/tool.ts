export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface Tool {
  platform: string;
  slug: string;
  title: string;
  description: string;
  placeholder: string;
  icon: string;
  category: string;

  featured?: boolean;
  premium?: boolean;

  aiType:
    | "title"
    | "description"
    | "tags"
    | "hashtags"
    | "keyword"
    | "instagram-caption";

  keywords?: string[];
  relatedTools?: string[];
  tips?: string[];
  faqs?: ToolFAQ[];
}