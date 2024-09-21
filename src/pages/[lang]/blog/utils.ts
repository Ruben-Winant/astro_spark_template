export const calculateReadingTime = (content: string) => {
  // Remove MDX-specific syntax (JSX tags, imports, code blocks, etc.)
  const strippedContent = content
    .replace(/<.*?>/g, "") // Remove JSX tags
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/import .*?;/g, "") // Remove import statements
    .replace(/#/g, "") // Remove markdown headers
    .replace(/[*_`~[\]]/g, ""); // Remove other markdown symbols like *, _, ~, [], etc.

  // Split the remaining content by whitespace and count words
  const wordCount = strippedContent
    .split(/\s+/) // Split by whitespace
    .filter(Boolean).length; // Filter out empty strings

  // Calculate reading time (average 200 words per minute)
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
};
