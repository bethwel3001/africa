
export interface Album {
  title: string;
  slug: string;
  coverImage: string;
  images: string[];
}

// Function to generate image paths
const generateImagePaths = (folder: string, count: number): string[] => {
  const paths: string[] = [];
  const encodedFolder = encodeURIComponent(folder);
  for (let i = 1; i <= count; i++) {
    paths.push(`/${encodedFolder}/${i}.jpeg`);
  }
  return paths;
};

export const eventsData: Album[] = [
  {
    title: "Africa We Want",
    slug: "africa-we-want",
    coverImage: "/AFRICA%20WE%20WANT/1.jpeg",
    images: generateImagePaths("AFRICA WE WANT", 9),
  },
  {
    title: "Law Society",
    slug: "law-society",
    coverImage: "/LAW%20SOCIETY/1.jpeg",
    images: generateImagePaths("LAW SOCIETY", 8),
  },
  {
    title: "Medical Society",
    slug: "medical-society",
    coverImage: "/MEDICAL%20SOCIETY/1.jpeg",
    images: generateImagePaths("MEDICAL SOCIETY", 4),
  },
  {
    title: "Commonwealth Secretariat",
    slug: "commonwealth-secretariat",
    coverImage: "/COMMONWEALTH%20SECRETARIAT/1.jpeg",
    images: generateImagePaths("COMMONWEALTH SECRETARIAT", 7),
  },
  {
    title: "Leaders' Chamber Program",
    slug: "leaders-chamber-program",
    coverImage: "/LEADERS'%20CHAMBER%20PROGRAM/1.jpeg",
    images: generateImagePaths("LEADERS' CHAMBER PROGRAM", 7),
  },
  {
    title: "SDGs",
    slug: "sdgs",
    coverImage: "/SDgs/1.jpeg",
    images: generateImagePaths("SDgs", 5),
  },
];
