// src/pathData.js
// Main path coordinates for the Ludo board (52 positions total)
// Fixed starting positions: Blue r6.c4, Red r4.c8, Green r8.c10, Yellow r10.c6

export const mainPath = [
  // Blue starting area and clockwise path
  { row: 6, col: 1 }, // 0 - Blue entry point
  { row: 6, col: 2 }, // 1 - Safe zone (Blue start nearby)
  { row: 6, col: 3 },
  { row: 6, col: 4 }, // Blue actual start position
  { row: 6, col: 5 },
  
  // Moving up the left side  
  { row: 5, col: 6 },
  { row: 4, col: 6 },
  { row: 3, col: 6 },
  { row: 2, col: 6 },
  { row: 1, col: 6 }, // 9 - Safe zone
  { row: 0, col: 6 },
  
  // Moving right along top
  { row: 0, col: 7 },
  { row: 0, col: 8 },
  
  // Red starting area
  { row: 1, col: 8 }, // 13 - Red entry point
  { row: 2, col: 8 }, // 14 - Safe zone
  { row: 3, col: 8 },
  { row: 4, col: 8 }, // Red actual start position
  { row: 5, col: 8 },
  
  // Moving right
  { row: 6, col: 9 },
  { row: 6, col: 10 },
  { row: 6, col: 11 },
  { row: 6, col: 12 },
  { row: 6, col: 13 }, // 22 - Safe zone
  { row: 6, col: 14 },
  
  // Moving down right side
  { row: 7, col: 14 },
  { row: 8, col: 14 },
  
  // Green starting area  
  { row: 8, col: 13 }, // 26 - Green entry point
  { row: 8, col: 12 }, // 27 - Safe zone
  { row: 8, col: 11 },
  { row: 8, col: 10 }, // Green actual start position
  { row: 8, col: 9 },
  
  // Moving down
  { row: 9, col: 8 },
  { row: 10, col: 8 },
  { row: 11, col: 8 },
  { row: 12, col: 8 },
  { row: 13, col: 8 }, // 35 - Safe zone
  { row: 14, col: 8 },
  
  // Moving left along bottom
  { row: 14, col: 7 },
  { row: 14, col: 6 },
  
  // Yellow starting area
  { row: 13, col: 6 }, // 39 - Yellow entry point
  { row: 12, col: 6 }, // 40 - Safe zone
  { row: 11, col: 6 },
  { row: 10, col: 6 }, // Yellow actual start position
  { row: 9, col: 6 },
  
  // Moving up left side to complete circle
  { row: 8, col: 5 },
  { row: 8, col: 4 },
  { row: 8, col: 3 },
  { row: 8, col: 2 },
  { row: 8, col: 1 }, // 48 - Safe zone
  { row: 8, col: 0 },
  
  // Final approach back to Blue area
  { row: 7, col: 0 },
  { row: 7, col: 1 }  // 51 - Last position before entering victory lane
];

// Starting positions for each player (where they enter the main path)
export const playerStartIndex = {
  Blue: 3,    // r6.c4
  Red: 16,    // r4.c8  
  Green: 29,  // r8.c10
  Yellow: 42  // r10.c6
};

// Home positions (inside the colored areas where tokens wait)
export const homePositions = {
  Blue: [
    { row: 1.5, col: 1.5 },
    { row: 1.5, col: 3.5 },
    { row: 3.5, col: 1.5 },
    { row: 3.5, col: 3.5 }
  ],
  Red: [
    { row: 1.5, col: 10.5 },
    { row: 1.5, col: 12.5 },
    { row: 3.5, col: 10.5 },
    { row: 3.5, col: 12.5 }
  ],
  Green: [
    { row: 10.5, col: 10.5 },
    { row: 10.5, col: 12.5 },
    { row: 12.5, col: 10.5 },
    { row: 12.5, col: 12.5 }
  ],
  Yellow: [
    { row: 10.5, col: 1.5 },
    { row: 10.5, col: 3.5 },
    { row: 12.5, col: 1.5 },
    { row: 12.5, col: 3.5 }
  ]
};

// Victory lanes (path to center for each color)
export const victoryLanes = {
  Blue: [
    { row: 7, col: 1 },
    { row: 7, col: 2 },
    { row: 7, col: 3 },
    { row: 7, col: 4 },
    { row: 7, col: 5 },
    { row: 7, col: 6 } // Final victory position
  ],
  Red: [
    { row: 1, col: 7 },
    { row: 2, col: 7 },
    { row: 3, col: 7 },
    { row: 4, col: 7 },
    { row: 5, col: 7 },
    { row: 6, col: 7 } // Final victory position
  ],
  Green: [
    { row: 7, col: 13 },
    { row: 7, col: 12 },
    { row: 7, col: 11 },
    { row: 7, col: 10 },
    { row: 7, col: 9 },
    { row: 7, col: 8 } // Final victory position
  ],
  Yellow: [
    { row: 13, col: 7 },
    { row: 12, col: 7 },
    { row: 11, col: 7 },
    { row: 10, col: 7 },
    { row: 9, col: 7 },
    { row: 8, col: 7 } // Final victory position
  ]
};

export const victoryCell = { row: 7, col: 7 }; // Center position