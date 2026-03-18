
export interface Album {
  title: string;
  slug: string;
  coverImage: string;
  images: string[];
}

// Function to generate image paths
const generateImagePaths = (folder: string, count: number): string[] => {
  const paths: string[] = [];
  for (let i = 1; i <= count; i++) {
    paths.push(`/${folder}/${i}.jpeg`);
  }
  return paths;
};

export const eventsData: Album[] = [
  {
    title: "Africa We Want",
    slug: "africa-we-want",
    coverImage: "/africa-we-want/1.jpeg",
    images: generateImagePaths("africa-we-want", 9),
  },
  {
    title: "Law Society",
    slug: "law-society",
    coverImage: "/law-society/1.jpeg",
    images: generateImagePaths("law-society", 8),
  },
  {
    title: "Medical Society",
    slug: "medical-society",
    coverImage: "/medical-society/1.jpeg",
    images: generateImagePaths("medical-society", 4),
  },
  {
    title: "Commonwealth Secretariat",
    slug: "commonwealth-secretariat",
    coverImage: "/commonwealth-secretariat/1.jpeg",
    images: generateImagePaths("commonwealth-secretariat", 7),
  },
  {
    title: "Leaders' Chamber Program",
    slug: "leaders-chamber-program",
    coverImage: "/leaders-chamber-program/1.jpeg",
    images: generateImagePaths("leaders-chamber-program", 7),
  },
  {
    title: "SDGs",
    slug: "sdgs",
    coverImage: "/sdgs/1.jpeg",
    images: generateImagePaths("sdgs", 5),
  },
];
