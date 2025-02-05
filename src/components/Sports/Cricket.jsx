import React from "react";

const TournamentBracket = () => {
  // --- Layout Constants ---
  const containerHeight = 600;
  const roundWidth = 180; // Increased spacing between rounds
  const boxWidth = 120;
  const boxHeight = 40;
  const verticalSpacing = 15; // Increased spacing for better visibility
  const trophyWidth = 120; // Space for the trophy

  // --- Bracket Rounds ---
  const rounds = [
    ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8", "Team 9", "Team 10",
     "Team 11", "Team 12", "Team 13", "Team 14", "Team 15", "Team 16", "Team 17", "Team 18", "Team 19", "Team 20"],
    ["Winner 1", "Winner 2", "Winner 3", "Winner 4", "Winner 5", "Winner 6", "Winner 7", "Winner 8", "Winner 9", "Winner 10"],
    ["Winner 11", "Winner 12", "Winner 13", "Winner 14", "Winner 15"],
    ["Winner 16", "Winner 17", "Winner 18"],
    ["Winner 19", "Winner 20"],
    ["Champion"],
  ];

  // --- Helper Function ---
  const getRoundTopOffset = (numBoxes) => {
    const roundTotalHeight = numBoxes * boxHeight + (numBoxes - 1) * verticalSpacing;
    return (containerHeight - roundTotalHeight) / 2;
  };

  // --- Compute positions for each round ---
  const positions = rounds.map((round, roundIndex) => {
    const offsetY = getRoundTopOffset(round.length);
    return round.map((_, boxIndex) => ({
      x: roundIndex * roundWidth,
      y: offsetY + boxIndex * (boxHeight + verticalSpacing),
    }));
  });

  // --- Build SVG Connector Paths ---
  const svgPaths = rounds.slice(0, rounds.length - 1).flatMap((_, r) =>
    rounds[r].map((_, boxIndex) => {
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

      // Adjusted control points for better curve connections
      const cpOffsetX = (end.x - start.x) / 2;
      const pathData = `M ${start.x} ${start.y} C ${start.x + cpOffsetX} ${start.y}, ${end.x - cpOffsetX} ${end.y}, ${end.x} ${end.y}`;

      return (
        <path
          key={`path-${r}-${boxIndex}`}
          d={pathData}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5" // Increased stroke width for visibility
          strokeLinecap="round"
        />
      );
    }).filter(Boolean)
  );

  // --- Total container width ---
  const totalWidth = rounds.length * roundWidth + trophyWidth;

  // --- Trophy Component ---
  const Trophy = () => (
    <div className="flex items-center justify-center" style={{ width: trophyWidth, height: containerHeight }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-yellow-400 drop-shadow-lg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 3h-3V2a1 1 0 00-1-1H8a1 1 0 00-1 1v1H4a1 1 0 00-1 1v3c0 3.87 2.46 7.16 6 8v3H5a1 1 0 000 2h14a1 1 0 000-2h-4v-3c3.54-.84 6-4.13 6-8V4a1 1 0 00-1-1z" />
      </svg>
    </div>
  );

  return (
    <div className="bg-black flex flex-col items-center relative min-h-screen pt-48">
      <div className="relative" style={{ width: totalWidth, height: containerHeight }}>
        {/* SVG Connector Paths */}
        <svg className="absolute top-0 left-0 pointer-events-none" width={totalWidth} height={containerHeight}>
          {svgPaths}
        </svg>

        {/* Render each round */}
        {rounds.map((round, roundIndex) => (
          <div
            key={`round-${roundIndex}`}
            className="absolute"
            style={{
              left: roundIndex * roundWidth,
              top: getRoundTopOffset(round.length),
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
        ))}

        {/* Trophy rendered after the final round */}
        <div style={{ position: "absolute", left: rounds.length * roundWidth, top: 0 }}>
          <Trophy />
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket;
