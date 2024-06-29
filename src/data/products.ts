import { Product } from "@/types/types";

import Img1 from "@/assets/images/wheels-1.png";
import Img2 from "@/assets/images/wheels-2.png";
import Img3 from "@/assets/images/wheels-3.png";
import A01G_01 from "@/assets/images/001/001G-001.jpg";
import A058_01 from "@/assets/images/058/058_001.png";
import A058_02 from "@/assets/images/058/058_002.png";
import A058_03 from "@/assets/images/058/058_003.png";
import A058_04 from "@/assets/images/058/058_004.png";
import A121_01 from "@/assets/images/121/121_001.png";
import A121_02 from "@/assets/images/121/121_002.png";
import A121_03 from "@/assets/images/121/121_003.png";
import A121_04 from "@/assets/images/121/121_004.png";
import A144_01 from "@/assets/images/144/A144.png";


export const products: Product[] = [
  {
    id: 121,
    name: "MiniLite",
    price: 3,
    description:
      "teste",
    images: [A121_01, A121_02, A121_03,A121_04],
    brand: "Datsun",
    colors: ["#000000", "#ffffff", "#daa520", "#bfbfbf", "#B87333", ],
    diameters: ["11"],
    top: true,
  },
  
  {
    id: 58,
    name: "Watanabe",
    price: 3,
    description:
      "As rodas Watanabe em escala 1:64 são uma réplica detalhada e autêntica das icônicas rodas Watanabe utilizadas em carros clássicos japoneses. Com acabamento de alta qualidade e design fiel ao original, essas miniaturas são perfeitas para colecionadores e entusiastas de modelismo que buscam adicionar um toque de realismo e estilo aos seus veículos em miniatura.",
    images: [A058_01,A058_02,A058_03,A058_04],
    brand: "GISA",
    colors: ["#000000", "#ffffff", "#daa520", "#bfbfbf", "#B87333", ],
    diameters: ["10","11",],
    top: true,
  },
  /*
  {
    id: 3,
    name: "produto 3",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img3],
    brand: "BMW",
    colors: ["Gold", "Silver", "#B87333"],
    diameters: ["9", "10", "10,6", "11", "12", "12,6"],
    top: true,
  },
  {
    id: 4,
    name: "produto 4",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "BMW",
    colors: ["Gold", "Silver", "#B87333"],
    diameters: ["9", "10", "10,6", "11", "12", "12,6"],
    top: true,
  },
  {
    id: 5,
    name: "produto 5",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img2],
    brand: "BMW",
    colors: ["Gold", "Silver", "#B87333"],
    diameters: ["9", "10", "10,6", "11", "12", "12,6"],
    top: true,
  },
  {
    id: 6,
    name: "produto 6",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img3],
    brand: "MERCEDES",
  },
  {
    id: 7,
    name: "produto 7",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "MERCEDES",
  },
  {
    id: 8,
    name: "produto 8",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img2],
    brand: "MERCEDES",
  },
  {
    id: 9,
    name: "produto 9",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img3],
    brand: "MERCEDES",
  },
  {
    id: 10,
    name: "produto 10",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "MERCEDES",
  },
  {
    id: 11,
    name: "produto 11",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img2],
    brand: "AUDI",
  },
  {
    id: 12,
    name: "produto 12",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img3],
    brand: "AUDI",
  },
  {
    id: 13,
    name: "produto 13",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "AUDI",
  },
  {
    id: 14,
    name: "produto 14",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "AUDI",
  },
  {
    id: 15,
    name: "produto 15",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "AUDI",
  },
  {
    id: 16,
    name: "produto 16",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "OZ",
  },
  {
    id: 17,
    name: "produto 17",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "OZ",
  },
  {
    id: 18,
    name: "produto 18",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "OZ",
  },
  {
    id: 19,
    name: "produto 19",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "OZ",
  },
  {
    id: 20,
    name: "produto 20",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "OZ",
  },
  {
    id: 21,
    name: "produto 21",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "BBS",
  },
  {
    id: 22,
    name: "produto 22",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "BBS",
  },
  {
    id: 23,
    name: "produto 23",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "BBS",
  },
  {
    id: 24,
    name: "produto 24",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "BBS",
  },
  {
    id: 25,
    name: "produto 24",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "VW",
  },
  {
    id: 26,
    name: "produto 24",
    price: 29.99,
    description: "descricao do produto 2",
    images: [Img1],
    brand: "VW",
  },
  */
];
