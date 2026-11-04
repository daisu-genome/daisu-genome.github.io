
export type Language = "ja" | "en";

export interface News {
  date: string;
  title: string;
  description?: string;
  languages: Language[];
  link?: string;
}

export const news: News[] = [
  {
    date: "2026-9-21",
    title: "My co-author research paper has been published in Nature Communications.",
    description: "Title: Five-country analysis of geographic and dietary drivers of gut microbiome composition and genomic variation",
    languages: ["en",],
    link: "/publications/"
  },
  {
    date: "2026-9-21",
    title: "Nature Communicationsにに共著者としての論文が掲載されました。",
    description: "論文タイトル: Five-country analysis of geographic and dietary drivers of gut microbiome composition and genomic variation",
    languages: ["ja",],
    link: "/publications/"
  },
  {
    date: "2026-7-14",
    title: "PeerJに筆頭著者としての論文が掲載されました。",
    description: "論文タイトル: Clinical strains isolated from early-stage colorectal cancer patients promote tumorigenesis",
    languages: ["ja",],
    link: "/publications/"
  },
  {
    date: "2026-7-14",
    title: "My first-author research paper has been published in PeerJ.",
    description: "Title: Clinical strains isolated from early-stage colorectal cancer patients promote tumorigenesis",
    languages: ["en",],
    link: "/publications/"
  },
  {
    date: "2026-4-01",
    title: "筑波大学、医学医療系の博士研究員になりました。",
    description: "",
    languages: ["ja"],
    
  },
  {
    date: "2026-4-01",
    title: "Started my role as a postdoc at University of Tsukuba",
    description: "",
    languages: ["en"],
  },


];
