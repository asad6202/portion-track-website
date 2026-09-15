export type PortionTip = {
  id: string;
  title: string;
  body: string;
};

/** Shared tips for the website carousel and the in-app Today screen. */
export const PORTION_TIPS: PortionTip[] = [
  {
    id: "half-veggies",
    title: "Tips for you",
    body: "Fill half your plate with colorful vegetables.",
  },
  {
    id: "broccoli-protein",
    title: "Did you know?",
    body: "Broccoli contains surprising amounts of plant protein.",
  },
  {
    id: "protein",
    title: "Tips for you",
    body: "A palm-sized serving of protein is one portion — chicken, fish, eggs, or beans.",
  },
  {
    id: "healthy-fats",
    title: "Tips for you",
    body: "Avocado, olive oil, and nuts count as fats — a small handful is one portion.",
  },
  {
    id: "berries",
    title: "Did you know?",
    body: "Berries are a simple fruit portion. Add a handful to breakfast or snacks.",
  },
  {
    id: "colorful-veggies",
    title: "Tips for you",
    body: "More color on the plate usually means a wider mix of veggies.",
  },
  {
    id: "progress",
    title: "Tips for you",
    body: "One meal doesn’t define how you eat. Progress matters more than perfection.",
  },
  {
    id: "no-calories",
    title: "Tips for you",
    body: "Skip the calorie math. Tap portions as you eat and watch your plate fill.",
  },
];
