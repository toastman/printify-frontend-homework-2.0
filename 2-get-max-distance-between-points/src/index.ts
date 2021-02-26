import { Dot } from "./types";

export const getDistance = ({ x: x1, y: y1 }: Dot, { x: x2, y: y2 }: Dot): number => {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

export function getLongestDistanceBetweenPoints(dots: Array<Dot>): number {
  if (!dots.length || dots.length === 1) return 0;

  return Math.max(...dots.map(d => {
    const distancesArr = dots.map(dot => getDistance(d, dot));
    return Math.max(...distancesArr);
  }))
}
