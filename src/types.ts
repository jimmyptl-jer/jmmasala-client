export type User = {
  _id: string
  email: string
  name: string
  addressLine1: string
  city: string
  country: string
}

export type Project = {
  title: string
  description: string
  gitUrl: string
  technology: string
  icons: string[]
}

export type Post = {
  title: string
  description: string
  videoLink: string
  blogLink: string
}

export type Certificate = {
  _id: string
  title: string
  issuer: string
  description: string
  link: string
}

export type CertificateCreation = Omit<Certificate, '_id'>

export type PostFormData = {
  title: string
  description: string
  videoLink: string
  blogLink: string
}

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  categories?: string[];
  image: string
};
