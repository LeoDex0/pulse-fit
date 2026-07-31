export type Trainer = {
  name: string;
  role: string;
  image: string;
};

export const TRAINERS: Trainer[] = [
  {
    name: "Jordan Vance",
    role: "Head Coach, Strength",
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Maya Torres",
    role: "HIIT & Conditioning",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Diego Ramirez",
    role: "Boxing Coach",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
  },
];
