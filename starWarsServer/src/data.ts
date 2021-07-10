import { Characters, Droids } from "./types";

const characters: Characters = {
  c_0: {
    name: "Luke Skywalker",
    sideOfTheForce: "light",
    droids: [`d_0`, `d_1`],
  },
  c_1: {
    name: "Obi-Wan Kenobi",
    sideOfTheForce: "light",
    droids: [`d_2`],
  },
  c_2: {
    name: "Darth Vader",
    sideOfTheForce: "dark",
    droids: [`d_0`, `d_1`],
  },
};

const droids: Droids = {
  d_0: {
    name: "R2-D2",
    function: "Astromech",
  },
  d_1: {
    name: "C-3PO",
    function: "Etiquette & protocol",
  },
  d_2: {
    name: "R4",
    function: "Astromech",
  },
};

export const data = {
  characters,
  droids,
};
