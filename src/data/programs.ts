export type Program = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  image: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "strength",
    title: "Strength Training",
    description:
      "Barbell fundamentals, progressive overload and coached form checks to build real, usable strength.",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hiit",
    title: "HIIT Conditioning",
    description:
      "High-intensity interval circuits designed to torch calories and build engine in 45 minutes flat.",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "boxing",
    title: "Boxing Conditioning",
    description:
      "Bag work, pad rounds and footwork drills that double as one of the best cardio sessions you'll do all week.",
    duration: "50 min",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "mobility",
    title: "Mobility & Recovery",
    description:
      "Guided stretching, breathwork and mobility drills to keep you training hard without breaking down.",
    duration: "40 min",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
  },
];
