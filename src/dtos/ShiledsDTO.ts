export interface ShieldDTO {
  id: string;
  name: string;
  image: string;
  description: string;
  attack: [
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
  defence: [
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
      amount: 28;
    },
    {
      name: string;
      amount: number;
    }
  ];
  scalesWith: [
    {
      name: string;
      scaling: string;
    },
    {
      name: string;
      scaling: string;
    }
  ];
  requiredAttributes: [
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    }
  ];
  category: string;
  weight: number;
}
