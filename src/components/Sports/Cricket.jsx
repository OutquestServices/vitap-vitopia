// import React from "react";

// const TournamentBracket = () => {
//   // --- Layout Constants ---
//   const containerHeight = 600;
//   const roundWidth = 180; // Increased spacing between rounds
//   const boxWidth = 120;
//   const boxHeight = 40;
//   const verticalSpacing = 15; // Increased spacing for better visibility
//   const trophyWidth = 120; // Space for the trophy

//   // --- Bracket Rounds ---
//   const rounds = [
//     ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8", "Team 9", "Team 10",
//      "Team 11", "Team 12", "Team 13", "Team 14", "Team 15", "Team 16", "Team 17", "Team 18", "Team 19", "Team 20"],
//     ["Winner 1", "Winner 2", "Winner 3", "Winner 4", "Winner 5", "Winner 6", "Winner 7", "Winner 8", "Winner 9", "Winner 10"],
//     ["Winner 11", "Winner 12", "Winner 13", "Winner 14", "Winner 15"],
//     ["Winner 16", "Winner 17", "Winner 18"],
//     ["Winner 19", "Winner 20"],
//     ["Champion"],
//   ];

//   // --- Helper Function ---
//   const getRoundTopOffset = (numBoxes) => {
//     const roundTotalHeight = numBoxes * boxHeight + (numBoxes - 1) * verticalSpacing;
//     return (containerHeight - roundTotalHeight) / 2;
//   };

//   // --- Compute positions for each round ---
//   const positions = rounds.map((round, roundIndex) => {
//     const offsetY = getRoundTopOffset(round.length);
//     return round.map((_, boxIndex) => ({
//       x: roundIndex * roundWidth,
//       y: offsetY + boxIndex * (boxHeight + verticalSpacing),
//     }));
//   });

//   // --- Build SVG Connector Paths ---
//   const svgPaths = rounds.slice(0, rounds.length - 1).flatMap((_, r) =>
//     rounds[r].map((_, boxIndex) => {
//       const start = {
//         x: positions[r][boxIndex].x + boxWidth,
//         y: positions[r][boxIndex].y + boxHeight / 2,
//       };
//       const targetIndex = Math.floor(boxIndex / 2);
//       if (!positions[r + 1][targetIndex]) return null;

//       const end = {
//         x: positions[r + 1][targetIndex].x,
//         y: positions[r + 1][targetIndex].y + boxHeight / 2,
//       };

//       // Adjusted control points for better curve connections
//       const cpOffsetX = (end.x - start.x) / 2;
//       const pathData = `M ${start.x} ${start.y} C ${start.x + cpOffsetX} ${start.y}, ${end.x - cpOffsetX} ${end.y}, ${end.x} ${end.y}`;

//       return (
//         <path
//           key={`path-${r}-${boxIndex}`}
//           d={pathData}
//           fill="none"
//           stroke="#ffffff"
//           strokeWidth="2.5" // Increased stroke width for visibility
//           strokeLinecap="round"
//         />
//       );
//     }).filter(Boolean)
//   );

//   // --- Total container width ---
//   const totalWidth = rounds.length * roundWidth + trophyWidth;

//   // --- Trophy Component ---
//   const Trophy = () => (
//     <div className="flex items-center justify-center" style={{ width: trophyWidth, height: containerHeight }}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-16 w-16 text-yellow-400 drop-shadow-lg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M20 3h-3V2a1 1 0 00-1-1H8a1 1 0 00-1 1v1H4a1 1 0 00-1 1v3c0 3.87 2.46 7.16 6 8v3H5a1 1 0 000 2h14a1 1 0 000-2h-4v-3c3.54-.84 6-4.13 6-8V4a1 1 0 00-1-1z" />
//       </svg>
//     </div>
//   );

//   return (
//     <div className="bg-black flex flex-col items-center relative min-h-screen pt-48">
//       <div className="relative" style={{ width: totalWidth, height: containerHeight }}>
//         {/* SVG Connector Paths */}
//         <svg className="absolute top-0 left-0 pointer-events-none" width={totalWidth} height={containerHeight}>
//           {svgPaths}
//         </svg>

//         {/* Render each round */}
//         {rounds.map((round, roundIndex) => (
//           <div
//             key={`round-${roundIndex}`}
//             className="absolute"
//             style={{
//               left: roundIndex * roundWidth,
//               top: getRoundTopOffset(round.length),
//               width: boxWidth,
//             }}
//           >
//             {round.map((team, teamIndex) => (
//               <div
//                 key={`team-${roundIndex}-${teamIndex}`}
//                 className="bg-gray-700 border border-gray-500 rounded p-1 text-center text-sm mb-2 last:mb-0 hover:scale-105 transition-transform duration-200 text-white"
//                 style={{
//                   height: boxHeight,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {team}
//               </div>
//             ))}
//           </div>
//         ))}

//         {/* Trophy rendered after the final round */}
//         <div style={{ position: "absolute", left: rounds.length * roundWidth, top: 0 }}>
//           <Trophy />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TournamentBracket;

// "use client";

// import { useState } from "react";

// const CricketTournamentTree = () => {
//   const [matches] = useState([
//     {
//       round: "Round of 16",
//       teams: ["India", "Australia", "Pakistan", "South Africa", "England", "New Zealand", "Sri Lanka", "West Indies"],
//       winners: ["India", "Pakistan", "England", "Sri Lanka"],
//       byes: [false, false, false, false, true, false, true, false],
//     },
//     {
//       round: "Quarter Finals",
//       teams: ["India", "Pakistan", "England", "Sri Lanka"],
//       winners: ["India", "England"],
//       byes: [false, false, false, false],
//     },
//     {
//       round: "Semi Finals",
//       teams: ["India", "England"],
//       winners: ["India"],
//       byes: [false, false],
//     },
//     {
//       round: "Final",
//       teams: ["India"],
//       winners: ["India"],
//       byes: [],
//     },
//   ]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="w-full max-w-6xl">
//         <h2 className="text-3xl font-bold text-center mb-8">🏏 Cricket Tournament Bracket</h2>
//         <div className="grid grid-cols-4 gap-16">
//           {matches.map((round, roundIndex) => (
//             <div key={roundIndex} className="flex flex-col items-center relative">
//               <h3 className="text-lg font-semibold mb-4">{round.round}</h3>
//               <div className="relative flex flex-col items-center">
//                 {round.teams.map((team, idx) => {
//                   const isWinner = round.winners.includes(team);
//                   const isBye = round.byes[idx];
//                   return (
//                     <div key={idx} className="relative flex items-center">
//                       <div className={`shadow-lg p-4 rounded-lg w-40 text-center mb-8 ${isWinner ? 'bg-green-300' : 'bg-red-300'}`}>
//                         <p className="font-bold">{team}</p>
//                         {isBye && <p className="text-sm text-gray-500">(BYE)</p>}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CricketTournamentTree;
"use client";

import { useState } from "react";

const CricketTournamentTree = () => {
  const [matches] = useState([
    {
      round: "Round of 16",
      fixtures: [
        { teams: ["India", "Australia"], winner: "India" },
        { teams: ["Pakistan", "South Africa"], winner: "Pakistan" },
        { teams: ["England", "New Zealand"], winner: "England" },
        { teams: ["Sri Lanka", "West Indies"], winner: "Sri Lanka" },
        { teams: ["Bangladesh"], winner: "Bangladesh", bye: true },
      ],
    },
    {
      round: "Quarter Finals",
      fixtures: [
        { teams: ["India", "Pakistan"], winner: "India" },
        { teams: ["England", "Sri Lanka"], winner: "England" },
        { teams: ["Bangladesh"], winner: "Bangladesh", bye: true },
      ],
    },
    {
      round: "Semi Finals",
      fixtures: [
        { teams: ["India", "England"], winner: "India" },
        { teams: ["Bangladesh"], winner: "Bangladesh", bye: true },
      ],
    },
    {
      round: "Final",
      fixtures: [
        { teams: ["India", "Bangladesh"], winner: "India" },
      ],
    },
  ]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">🏏 Cricket Tournament Bracket</h2>
        <div className="grid grid-cols-4 gap-16">
          {matches.map((round, roundIndex) => (
            <div key={roundIndex} className="flex flex-col items-center relative">
              <h3 className="text-lg font-semibold mb-4">{round.round}</h3>
              <div className="relative flex flex-col items-center">
                {round.fixtures.map((match, idx) => (
                  <div key={idx} className="shadow-lg p-4 rounded-lg w-48 text-center mb-8 bg-white border border-gray-300">
                    {match.bye ? (
                      <p className="font-bold text-black">{match.teams[0]} (BYE)</p>
                    ) : (
                      <p className="font-bold">
                        <span className={`text-${match.winner === match.teams[0] ? 'green' : 'red'}-500`}>{match.teams[0]}</span><br/>
                        <span className="text-gray-500"> vs </span><br/>
                        <span className={`text-${match.winner === match.teams[1] ? 'green' : 'red'}-500`}>{match.teams[1]}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CricketTournamentTree;