interface Size {
  size: string;
  "add-price": string;
}

interface Additive {
  name: string;
  "add-price": string;
}

export interface Menu {
  img: string;
  name: string;
  description: string;
  price: string;
  category: string;
  sizes: {
    s: Size;
    m: Size;
    l: Size;
  };
  additives: Additive[];
}

export type MuneType = Menu[];