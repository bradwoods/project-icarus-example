interface Character {
  name: string;
  sideOfTheForce: string;
  droids: string[];
}

interface Droid {
  name: string;
  function: string;
}

export type Characters = Record<string, Character>;

export type Droids = Record<string, Droid>;
