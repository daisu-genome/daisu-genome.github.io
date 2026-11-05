export interface Publication {
  type: "paper" | "book";
  languages?: ("ja" | "en")[];
  title: string;
  authors: string;
  journal: string;
  vol: string;
  year: number;
  link?: string;
}

export const publications: Publication[] = [
    {
      type : 'paper',
      languages: ["ja", "en"],
      title: "Five-country analysis of geographic and dietary drivers of gut microbiome composition and genomic variation",
      authors: "Khatib L, Oles R, Hernández AR, Myers T, Zhao J, Kumar M, Laroya A, Tolosa-Enguis V, Matsunami N,Suzuki D, Chiba N, Gilbert KE, Das P, Sanders JG, Patel L, Litwin N, Nowinski B, Birmingham A, Farmer S, Brennan C, Bryant M, Tribelhorn C, Sanders-Bodai K, Cowart C, Nizet O, Diaz EA, Veiga P, Shetty SA, Knol J, Lay C, Koutnikova H, Chaumont S, Tap J, Cotillard A, Derrien M, Laiola M, González A, Tovar AR, Torres N, Sanz Y, Yamada T, McDonald D, Song SJ, Bartko A, Knight R.",
      journal: "Nature Communications",
      vol: "17(1):11004",
      year: 2026,
      link: "https://doi.org/10.1038/s41467-026-77928-9",
    }
    ,
    {
      type : 'paper',
      languages: ["ja", "en"],
      title: "Clinical strains isolated from early-stage colorectal cancer patients promote tumorigenesis",
      authors: "Suzuki D, Yang J, Obana N, Yachida S, Shiba S, Mizutani S, Takamaru H, Saito Y, Fukuda S, Yamada T.",
      journal: "PeerJ",
      vol: "14:e21488",
      year: 2026,
      link: "https://doi.org/10.7717/peerj.21488"
      
    }
    ,
    {
      type : 'book',
      languages: ["ja", ],
      title: "マイクロバイオームと医療応⽤全⾝の微⽣物叢が⽣理機能と病態をいかに制御するか？ 第２章 マイクロバイオームと⽣理・病理との関連, Ⅲ．ディスバイオーシスと疾患, 12．腸内細菌と⼤腸がん研究の最前線",
      authors: "鈴⽊⼤輔, ⼭⽥拓司",
      journal: "実験医学増刊",
      vol: "Vol.42 No.17",
      year: 2024,
      link: "https://www.yodosha.co.jp/yodobook/book/9784758104227/"
    }
    ,
    {
      type : 'paper',
      languages: ["ja", "en"],
      title: "Molten salt synthesis of high-entropy alloy AlCoCrFeNiV nanoparticles for the catalytic hydrogenation of p-nitrophenol by NaBH4, International Journal of Hydrogen Energy",
      authors: "Y. Kobayashi, D. Suzuki, S. Yokoyama, R. Shoji",
      journal: "International Journal of Hydrogen Energy",
      vol: "47(6) 3722-3732",
      year: 2022,
      link: "https://doi.org/10.1016/j.ijhydene.2021.10.260"
      
    }
    ,
    {
      type : 'paper',
      languages: ["ja"],
      title: "建設汚泥の循環利用に向けた腐植物質の抽出と分光学的特徴の解析 ――建設汚泥と腐植物質の性質の間に成り立つ関係調査――",
      authors: "鈴木 大輔, 庄司 良",
      journal: "Japan Society of Material Cycles and Waste Management",
      vol: "32, 86-98",
      year: 2021,
      link: " https://doi.org/10.3985/jjsmcwm.32.86"
      
    }
    ,
    {
      type : 'paper',
      languages: ["ja"],
      title: "土壌環境由来の腐植物質による環境汚染物質の吸着性",
      authors: "鈴木 大輔, 庄司 良",
      journal: "分離技術",
      vol: "51, 1",
      year: 2021,
      link: "https://ndlsearch.ndl.go.jp/books/R000000004-I031294071"
      
    }
    ,
    {
      type : 'paper',
      languages: ["ja","en"],
      title: "Toxicological effects of chlorophenols to green algae observed at various pH and concentration of humic acid",
      authors: "Daisuke Suzuki, Ryo Shoji",
      journal: "Journal of Hazardous Materials",
      vol: "400:123079",
      year: 2020,
      link: " https://doi.org/10.1016/j.jhazmat.2020.123079"
      
    }
    ,
    {
      type : 'paper',
      languages: ["ja"],
      title: "SDGsを意識した社会実装教育とその展開－社会実装教育フォーラムのテーマをSDGsの観点で解析－",
      authors: "庄司 良, 鈴木 大輔",
      journal: "工学教育",
      vol: "68, 2",
      year: 2020,
      link: "https://doi.org/10.4307/jsee.68.2_46"
      
    }
    ,
    {
      type : 'paper',
      languages: ["ja"],
      title: "フミン酸を用いた酸解離定数が異なるクロロフェノール類の吸着",
      authors: "庄司 良, 岩田 孝樹, 鈴木 大輔",
      journal: "環境科学会誌",
      vol: "31, 6",
      year: 2018,
      link: "https://doi.org/10.11353/sesj.31.252"
      
    }
    ,
    {
      type : 'paper',
      languages: ["ja",'en'],
      title: "Toxicological Effects of Chlorophenols to Green Algae in Case of Coexisting Humic Substanes",
      authors: "Daisuke Suzuki, Ryo Shoji",
      journal: "Journal of Environmental & Analytical Toxicology",
      vol: "8, 3",
      year: 2018,
      
    }
  ];
  