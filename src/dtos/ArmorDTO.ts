export interface ArmorDTO {
  id: string;
  name: string;
  image: string | any;
  description: string;
  category: string;
  dmgNegation: [
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    }
  ];
  resistance: [
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    }
  ];
  weight: number;
}
