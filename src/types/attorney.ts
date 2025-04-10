export interface Attorney {
  name: string;
  position: string;
  specialization: string;
  image: {
    src: string;
    isLocal: boolean;
  };
  email: string;
  phone: string;
  education: string[];
  expertise: string[];
  languages: string[];
  bio: string;
}