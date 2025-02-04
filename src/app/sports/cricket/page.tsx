import React from "react";
import Navbar from "../../../components/Homepage/sections/navbar";
interface Position {
  x: number;
  y: number;
}

const TournamentBracket: React.FC = () => {
  // --- Layout Constants ---
  const containerHeight = 600; // overall container height (px)
  const roundWidth = 150; // horizontal space per round (px)
  const boxWidth = 120; // width of each team/match box (px)
  const boxHeight = 40; // height of each box (px)
  const verticalSpacing = 10; // vertical spacing between boxes (px)
  const trophyWidth = 100; // additional space for the trophy at the end

  // --- Bracket Rounds ---
  // Round 1: 20 teams; subsequent rounds are defined with placeholder winners.
  const rounds: string[][] = [
    [
      "Team 1",
      "Team 2",
      "Team 3",
      "Team 4",
      "Team 5",
      "Team 6",
      "Team 7",
      "Team 8",
      "Team 9",
      "Team 10",
      "Team 11",
      "Team 12",
      "Team 13",
      "Team 14",
      "Team 15",
      "Team 16",
      "Team 17",
      "Team 18",
      "Team 19",
      "Team 20",
    ],
    [
      "Winner 1",
      "Winner 2",
      "Winner 3",
      "Winner 4",
      "Winner 5",
      "Winner 6",
      "Winner 7",
      "Winner 8",
      "Winner 9",
      "Winner 10",
    ],
    ["Winner 11", "Winner 12", "Winner 13", "Winner 14", "Winner 15"],
    ["Winner 16", "Winner 17", "Winner 18"],
    ["Winner 19", "Winner 20"],
    ["Champion"],
  ];

  // --- Helper Function ---
  // Centers a round vertically in the container.
  const getRoundTopOffset = (numBoxes: number): number => {
    const roundTotalHeight =
      numBoxes * boxHeight + (numBoxes - 1) * verticalSpacing;
    return (containerHeight - roundTotalHeight) / 2;
  };

  // --- Compute positions for each round ---
  // Each round is placed horizontally by (roundIndex * roundWidth) and vertically centered.
  const positions: Position[][] = rounds.map((round, roundIndex) => {
    const offsetY = getRoundTopOffset(round.length);
    return round.map((_, boxIndex) => ({
      x: roundIndex * roundWidth,
      y: offsetY + boxIndex * (boxHeight + verticalSpacing),
    }));
  });

  // --- Build SVG Connector Paths ---
  // For every box in round[i], draw a connector to the corresponding box in round[i+1]
  // (using Math.floor(boxIndex/2) to select the target box).
  const svgPaths = rounds.slice(0, rounds.length - 1).flatMap((_, r) =>
    rounds[r]
      .map((_, boxIndex) => {
        const start = {
          x: positions[r][boxIndex].x + boxWidth,
          y: positions[r][boxIndex].y + boxHeight / 2,
        };
        const targetIndex = Math.floor(boxIndex / 2);
        if (!positions[r + 1][targetIndex]) return null;
        const end = {
          x: positions[r + 1][targetIndex].x,
          y: positions[r + 1][targetIndex].y + boxHeight / 2,
        };
        const cpOffset = 20;
        const pathData = `M ${start.x} ${start.y} C ${start.x + cpOffset} ${start.y}, ${end.x - cpOffset} ${end.y}, ${end.x} ${end.y}`;
        return (
          <path
            key={`path-${r}-${boxIndex}`}
            d={pathData}
            fill="none"
            stroke="#888"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })
      // Use a type guard in the filter so TypeScript knows we remove nulls
      .filter((p): p is JSX.Element => p !== null),
  );
  // --- Total container width ---
  const totalWidth: number = rounds.length * roundWidth + trophyWidth;

  // --- Trophy Component ---
  const Trophy: React.FC = () => (
    <div
      style={{
        width: trophyWidth,
        height: containerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-yellow-400 drop-shadow-lg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 3h-3V2a1 1 0 00-1-1H8a1 1 0 00-1 1v1H4a1 1 0 00-1 1v3c0 3.87 2.46 7.16 6 8v3H5a1 1 0 000 2h14a1 1 0 000-2h-4v-3c3.54-.84 6-4.13 6-8V4a1 1 0 00-1-1zm-9 0H9V2h2v1zm4 0h-2V2h2v1zM6 8a5.978 5.978 0 00-4 1.64V5h2v2a4 4 0 014-4 4 4 0 014 4v2h2V8.64A5.978 5.978 0 0018 8c-3.31 0-6 2.69-6 6v3H12v-3c0-3.31-2.69-6-6-6z" />
      </svg>
    </div>
  );

  // --- Global Connector Paths from Final Round to Trophy ---
  // (For demonstration, we draw two connectors from the first box of the final round.)
  const leftFinalGlobal = {
    x: rounds.length * roundWidth,
    y: positions[rounds.length - 1][0].y + boxHeight / 2,
  };
  const trophyGlobal = {
    x: rounds.length * roundWidth + 50,
    y: containerHeight / 2,
  };
  const finalPaths = (
    <svg
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      width={totalWidth}
      height={containerHeight}
    >
      <path
        d={`M ${leftFinalGlobal.x} ${leftFinalGlobal.y} C ${leftFinalGlobal.x + 30} ${leftFinalGlobal.y}, ${trophyGlobal.x - 30} ${trophyGlobal.y}, ${trophyGlobal.x} ${trophyGlobal.y}`}
        fill="none"
        stroke="#888"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  // --- Main Render ---
  return (
    <div className="bg-black items-center flex flex-col relative">
      <Navbar />

      <div
        className="relative"
        style={{ width: totalWidth, height: containerHeight }}
      >
        {/* SVG connector paths drawn behind the rounds */}
        {finalPaths}

        {/* Render each round */}
        {rounds.map((round, roundIndex) => {
          const roundTop = getRoundTopOffset(round.length);
          return (
            <div
              key={`round-${roundIndex}`}
              className="absolute"
              style={{
                left: roundIndex * roundWidth,
                top: roundTop,
                width: boxWidth,
              }}
            >
              {round.map((team, teamIndex) => (
                <div
                  key={`team-${roundIndex}-${teamIndex}`}
                  className="bg-gray-700 border border-gray-500 rounded p-1 text-center text-sm mb-2 last:mb-0 hover:scale-105 transition-transform duration-200 text-white"
                  style={{
                    height: boxHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {team}
                </div>
              ))}
            </div>
          );
        })}

        {/* Trophy rendered after the final round */}
        <div
          style={{
            position: "absolute",
            left: rounds.length * roundWidth,
            top: 0,
          }}
        >
          <Trophy />
        </div>

        {/* SVG connector paths overlay */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
          width={totalWidth}
          height={containerHeight}
        >
          {svgPaths}
        </svg>
      </div>
    </div>
  );
};

export default TournamentBracket;
