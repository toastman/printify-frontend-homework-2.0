import { getLongestDistanceBetweenPoints, getDistance } from './index';
import { Dot } from "./types";

const mockData: Array<Dot> = [
  { x: 1, y: 1 },
  { x: 1, y: -300 },
  { x: 2, y: 4 },
  { x: -2, y: 3 },
  { x: -2, y: 3 },
]

describe('getLongestDistanceBetweenPoints', () => {
  it('should work', () => {
    const result = getLongestDistanceBetweenPoints(mockData);

    expect(result).toBe(304.00164473239283);
  });

  it('should support empty array', () => {
    const result = getLongestDistanceBetweenPoints([]);

    expect(result).toBe(0);
  });

  it('should support array with one dot', () => {
    const result = getLongestDistanceBetweenPoints([{ x: 1, y: 1 }]);

    expect(result).toBe(0);
  });
});

describe('getDistance', () => {
  it("should calculate distance between points", () => {
    const distance = getDistance({ x: 1, y: 1 }, { x: 1, y: -1 });

    expect(distance).toBe(2);
  })
})
