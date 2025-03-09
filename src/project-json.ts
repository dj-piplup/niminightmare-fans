export const projects = [];

declare global {
  type Project = {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
  };
}
