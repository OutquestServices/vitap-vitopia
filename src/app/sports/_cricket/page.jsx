import React from "react";
import { FaBaseballBall } from "react-icons/fa";
import { GiBaseballBat, GiCrown } from "react-icons/gi";

const BOX_WIDTH = 160;
const BOX_HEIGHT = 45;
const BOX_GAP = 13;
const MATCH_GAP = 30;
const HORIZ_GAP = 50;
const EXTRA_GAP = 0;

const leftTreeQuarterX = 0;
const leftTreeSemifinalX = BOX_WIDTH + HORIZ_GAP;
const leftTreeChampionX = leftTreeSemifinalX + BOX_WIDTH + HORIZ_GAP;
const leftTreeContainerWidth = leftTreeChampionX + BOX_WIDTH;

const rightTreeChampionX = 0;
const rightTreeSemifinalX = rightTreeChampionX + BOX_WIDTH + HORIZ_GAP;
const rightTreeQuarterX = rightTreeSemifinalX + BOX_WIDTH + HORIZ_GAP;
const rightTreeContainerWidth = rightTreeQuarterX + BOX_WIDTH;

const NUM_QF_MATCHES = 4;
const qfGroupHeight = 2 * BOX_HEIGHT + BOX_GAP;
const treeContainerHeight =
  NUM_QF_MATCHES * qfGroupHeight + (NUM_QF_MATCHES - 1) * MATCH_GAP;

const quarterfinalMatchesLeft = [
  { team1: "Team Alpha", team2: "Team Beta", score: "1-0" },
  { team1: "Team Gamma", team2: "Team Delta", score: "2-1" },
  { team1: "Team Epsilon", team2: "Team Zeta", score: "0-0" },
  { team1: "Team Eta", team2: "Team Theta", score: "3-2" },
];
const semifinalMatchesLeft = [
  { team1: "Winner Q1", team2: "Winner Q2", score: "4-3" },
  { team1: "Winner Q3", team2: "Winner Q4", score: "2-2" },
];
const finalMatchLeft = { team: "Left Champion" };

const quarterfinalMatchesRight = [
  { team1: "Team Iota", team2: "Team Kappa", score: "0-1" },
  { team1: "Team Lambda", team2: "Team Mu", score: "3-0" },
  { team1: "Team Nu", team2: "Team Xi", score: "1-1" },
  { team1: "Team Omicron", team2: "Team Pi", score: "2-0" },
];
const semifinalMatchesRight = [
  { team1: "Winner Q1", team2: "Winner Q2", score: "3-2" },
  { team1: "Winner Q3", team2: "Winner Q4", score: "0-0" },
];
const finalMatchRight = { team: "Right Champion" };

const MatchBox = ({ children, score = "Score: 1-0", style = {} }) => (
  <div
    className="group relative border border-gray-500 text-white flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700 transition-transform duration-300 hover:scale-105"
    style={style}
  >
    {children}
    <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      {score}
    </div>
  </div>
);

const computeGroupCenter = (groupTop) => groupTop + BOX_HEIGHT + BOX_GAP / 2;

const LeftBracketTree = () => {
  const qfPositions = quarterfinalMatchesLeft.map((_, i) => {
    const groupTop = i * (qfGroupHeight + MATCH_GAP);
    return {
      top: groupTop,
      bottom: groupTop + BOX_HEIGHT + BOX_GAP,
      center: computeGroupCenter(groupTop),
    };
  });
  const semifinalPositions = [];
  {
    const center = (qfPositions[0].center + qfPositions[1].center) / 2;
    semifinalPositions.push({
      center,
      top: center - (BOX_HEIGHT + BOX_GAP) / 2,
    });
  }
  {
    const center = (qfPositions[2].center + qfPositions[3].center) / 2;
    semifinalPositions.push({
      center,
      top: center - (BOX_HEIGHT + BOX_GAP) / 2,
    });
  }
  const championCenter =
    (semifinalPositions[0].center + semifinalPositions[1].center) / 2;
  const championTop = championCenter - BOX_HEIGHT / 2;
  return (
    <div
      className="relative bg-transparent"
      style={{ width: leftTreeContainerWidth, height: treeContainerHeight }}
    >
      {quarterfinalMatchesLeft.map((match, i) => (
        <React.Fragment key={`lqf-${i}`}>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: qfPositions[i].top,
              left: leftTreeQuarterX,
            }}
          >
            {match.team1}
          </MatchBox>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: qfPositions[i].bottom,
              left: leftTreeQuarterX,
            }}
          >
            {match.team2}
          </MatchBox>
        </React.Fragment>
      ))}
      {semifinalMatchesLeft.map((match, i) => (
        <React.Fragment key={`lsf-${i}`}>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: semifinalPositions[i].top,
              left: leftTreeSemifinalX,
            }}
          >
            {match.team1}
          </MatchBox>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: semifinalPositions[i].top + BOX_HEIGHT + BOX_GAP,
              left: leftTreeSemifinalX,
            }}
          >
            {match.team2}
          </MatchBox>
        </React.Fragment>
      ))}
      <MatchBox
        score="Final: 5-4"
        style={{
          width: BOX_WIDTH,
          height: BOX_HEIGHT,
          position: "absolute",
          top: championTop,
          left: leftTreeChampionX,
        }}
      >
        {finalMatchLeft.team}
      </MatchBox>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[0, 1].map((i) => {
          const startX = leftTreeQuarterX + BOX_WIDTH;
          const startY = qfPositions[i].center;
          const midX1 = leftTreeQuarterX + BOX_WIDTH + HORIZ_GAP;
          const midY = semifinalPositions[0].center;
          const midX2 = leftTreeSemifinalX - HORIZ_GAP;
          const endX = leftTreeSemifinalX;
          return (
            <polyline
              key={`lconn-sf-0-${i}`}
              points={`
                  ${startX},${startY}
                  ${midX1},${startY}
                  ${midX1},${midY}
                  ${midX2},${midY}
                  ${endX},${midY}
                `}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
        {[2, 3].map((i) => {
          const startX = leftTreeQuarterX + BOX_WIDTH;
          const startY = qfPositions[i].center;
          const midX1 = leftTreeQuarterX + BOX_WIDTH + HORIZ_GAP;
          const midY = semifinalPositions[1].center;
          const midX2 = leftTreeSemifinalX - HORIZ_GAP;
          const endX = leftTreeSemifinalX;
          return (
            <polyline
              key={`lconn-sf-1-${i}`}
              points={`
                  ${startX},${startY}
                  ${midX1},${startY}
                  ${midX1},${midY}
                  ${midX2},${midY}
                  ${endX},${midY}
                `}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
        {semifinalPositions.map((sf, i) => {
          const startX = leftTreeSemifinalX + BOX_WIDTH;
          const startY = sf.center;
          const midX1 = leftTreeSemifinalX + BOX_WIDTH + HORIZ_GAP / 2;
          const midY = championCenter;
          const midX2 = leftTreeChampionX - HORIZ_GAP / 2;
          const endX = leftTreeChampionX;
          return (
            <polyline
              key={`lconn-champ-${i}`}
              points={`
                  ${startX},${startY}
                  ${midX1},${startY}
                  ${midX1},${midY}
                  ${midX2},${midY}
                  ${endX},${midY}
                `}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
      </svg>
    </div>
  );
};

const RightBracketTree = () => {
  const qfPositions = quarterfinalMatchesRight.map((_, i) => {
    const groupTop = i * (qfGroupHeight + MATCH_GAP);
    return {
      top: groupTop,
      bottom: groupTop + BOX_HEIGHT + BOX_GAP,
      center: computeGroupCenter(groupTop),
    };
  });
  const semifinalPositions = [];
  {
    const center = (qfPositions[0].center + qfPositions[1].center) / 2;
    semifinalPositions.push({
      center,
      top: center - (BOX_HEIGHT + BOX_GAP) / 2,
    });
  }
  {
    const center = (qfPositions[2].center + qfPositions[3].center) / 2;
    semifinalPositions.push({
      center,
      top: center - (BOX_HEIGHT + BOX_GAP) / 2,
    });
  }
  const championCenter =
    (semifinalPositions[0].center + semifinalPositions[1].center) / 2;
  const championTop = championCenter - BOX_HEIGHT / 2;
  return (
    <div
      className="relative bg-transparent"
      style={{ width: rightTreeContainerWidth, height: treeContainerHeight }}
    >
      {quarterfinalMatchesRight.map((match, i) => (
        <React.Fragment key={`rqf-${i}`}>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: qfPositions[i].top,
              left: rightTreeQuarterX,
            }}
          >
            {match.team1}
          </MatchBox>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: qfPositions[i].bottom,
              left: rightTreeQuarterX,
            }}
          >
            {match.team2}
          </MatchBox>
        </React.Fragment>
      ))}
      {semifinalMatchesRight.map((match, i) => (
        <React.Fragment key={`rsf-${i}`}>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: semifinalPositions[i].top,
              left: rightTreeSemifinalX,
            }}
          >
            {match.team1}
          </MatchBox>
          <MatchBox
            score={match.score}
            style={{
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              position: "absolute",
              top: semifinalPositions[i].top + BOX_HEIGHT + BOX_GAP,
              left: rightTreeSemifinalX,
            }}
          >
            {match.team2}
          </MatchBox>
        </React.Fragment>
      ))}
      <MatchBox
        score="Final: 4-3"
        style={{
          width: BOX_WIDTH,
          height: BOX_HEIGHT,
          position: "absolute",
          top: championTop,
          left: rightTreeChampionX,
        }}
      >
        {finalMatchRight.team}
      </MatchBox>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[0, 1].map((i) => {
          const startX = rightTreeQuarterX;
          const startY = qfPositions[i].center;
          const midX1 = rightTreeQuarterX - HORIZ_GAP - EXTRA_GAP;
          const midY = semifinalPositions[0].center;
          const midX2 = rightTreeSemifinalX + BOX_WIDTH + HORIZ_GAP + EXTRA_GAP;
          const endX = rightTreeSemifinalX + BOX_WIDTH;
          return (
            <polyline
              key={`rconn-sf-0-${i}`}
              points={`
                  ${startX},${startY}
                  ${midX1},${startY}
                  ${midX1},${midY}
                  ${midX2},${midY}
                  ${endX},${midY}
                `}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
        {[2, 3].map((i) => {
          const startX = rightTreeQuarterX;
          const startY = qfPositions[i].center;
          const midX1 = rightTreeQuarterX - HORIZ_GAP - EXTRA_GAP;
          const midY = semifinalPositions[1].center;
          const midX2 = rightTreeSemifinalX + BOX_WIDTH + HORIZ_GAP + EXTRA_GAP;
          const endX = rightTreeSemifinalX + BOX_WIDTH;
          return (
            <polyline
              key={`rconn-sf-1-${i}`}
              points={`
                  ${startX},${startY}
                  ${midX1},${startY}
                  ${midX1},${midY}
                  ${midX2},${midY}
                  ${endX},${midY}
                `}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
        {semifinalPositions.map((sf, i) => {
          const startX = rightTreeSemifinalX;
          const startY = sf.center;
          const midX1 = rightTreeSemifinalX - HORIZ_GAP / 2 - EXTRA_GAP;
          const midY = championCenter;
          const midX2 =
            rightTreeChampionX + BOX_WIDTH + HORIZ_GAP / 2 + EXTRA_GAP;
          const endX = rightTreeChampionX + BOX_WIDTH;
          return (
            <polyline
              key={`rconn-champ-${i}`}
              points={`
                  ${startX},${startY}
                  ${midX1},${startY}
                  ${midX1},${midY}
                  ${midX2},${midY}
                  ${endX},${midY}
                `}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
      </svg>
    </div>
  );
};

const GrandFinal = () => {
  const containerWidth = BOX_WIDTH;
  const containerHeight = treeContainerHeight;
  const grandBoxTop = (containerHeight - BOX_HEIGHT) / 2;
  return (
    <div
      className="relative flex items-center justify-center bg-transparent"
      style={{ width: containerWidth, height: containerHeight }}
    >
      <div
        className="group relative border border-gray-500 text-white flex items-center justify-center bg-gradient-to-br from-yellow-500 to-black transition-transform duration-300 hover:scale-105"
        style={{
          width: BOX_WIDTH,
          height: BOX_HEIGHT,
          position: "absolute",
          left: (containerWidth - BOX_WIDTH) / 2,
          top: grandBoxTop,
        }}
      >
        <span className="flex items-center">
          <GiCrown className="mr-1" size={24} /> Victor
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Final Score: 5-4
        </div>
      </div>
    </div>
  );
};

const TournamentBracket = () => {
  const leftWidth = leftTreeContainerWidth;
  const grandWidth = BOX_WIDTH;
  const rightWidth = rightTreeContainerWidth;
  const gap = 20;
  const totalWidth = leftWidth + grandWidth + rightWidth + 2 * gap;
  const containerHeight = treeContainerHeight;
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4"
      style={{ width: "100%" }}
    >
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white mb-8">
        <FaBaseballBall className="inline-block mr-2" size={30} />
        Tournament Bracket
        <GiBaseballBat className="inline-block ml-2" size={30} />
      </h1>
      <div
        className="relative flex flex-row items-center justify-center"
        style={{ width: totalWidth, height: containerHeight }}
      >
        <div>{<LeftBracketTree />}</div>
        <div style={{ marginLeft: gap, marginRight: gap }}>
          {<GrandFinal />}
        </div>
        <div>{<RightBracketTree />}</div>
      </div>
    </div>
  );
};

export default TournamentBracket;
