import { Tag } from "../Typography";

export const getFontSize = (tag: Tag): string => {
  switch (tag) {
    case "span":
      return "1rem";
    case "p":
      return "1rem";
    case "h1":
      return "2rem";
    case "h2":
      return "1.5rem";
    case "h3":
      return "1.25rem";
  }
};
