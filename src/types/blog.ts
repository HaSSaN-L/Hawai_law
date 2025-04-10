export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
  content: {
    type: 'paragraph' | 'heading';
    content: string;
  }[];
}