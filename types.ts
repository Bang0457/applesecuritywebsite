
export interface Service {
  id: string;
  title: string;
  description: string;
  useCase: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
