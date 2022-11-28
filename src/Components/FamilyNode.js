import { PropTypes } from 'prop-types';
import React from 'react';
import Svg, { Line, Rect, Text, TSpan } from 'react-native-svg';

function FamilyNode({ chidrens }) {
  const LINE_COLOR = '#C4C4C4';
  const LINE_STROKE = 2;
  const LINE_HEIGHT = 20;
  const LINE_TOP_MARGIN = 2;
  const TOTAL_WIDTH = 100;
  const LINE_X1 = TOTAL_WIDTH / childrenCount / 2;
  const LINE_X2 = TOTAL_WIDTH - LINE_X1;
  const VERTICAL_SPACE = 20;
  const NODE_BG_COLOR = '#E4A951';
  const NODE_BG_LIGHT_COLOR = '#FFD233';
  const MALE_NODE_BORDER_COLOR = '#0073B6';
  const FEMALE_NODE_BORDER_COLOR = '#DC0D85';
  const NODE_Y_MARGIN = 2;
  const childrenCount = chidrens.length;

  const SQUARE = {
    width: 30,
    height: 30,
    r: 30,
  };

  return (
    <Svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      stroke={1}
      strokeWidth={1}
      fill="red">
      <Rect
        x={`${50 - SQUARE.width / childrenCount}%`}
        width={SQUARE.width}
        height={SQUARE.height}
        rx={SQUARE.r}
        fill={NODE_BG_COLOR}
      />
      <Line
        x1="50%"
        y1={SQUARE.height + NODE_Y_MARGIN}
        x2="50%"
        y2={SQUARE.height + NODE_Y_MARGIN + LINE_HEIGHT}
        stroke={LINE_COLOR}
        strokeWidth={LINE_STROKE}
      />
      <Line
        x1={`${LINE_X1}%`}
        y1={SQUARE.height + NODE_Y_MARGIN + LINE_HEIGHT}
        x2={`${LINE_X2}%`}
        y2={SQUARE.height + NODE_Y_MARGIN + LINE_HEIGHT}
        stroke={LINE_COLOR}
        strokeWidth={LINE_STROKE}
      />
      {chidrens.map((child, index) => {
        const subChildrens = child.childrens || [];
        let x1 = TOTAL_WIDTH / childrenCount / 2;
        const cofficient = TOTAL_WIDTH / childrenCount;
        x1 += cofficient * index;
        return (
          <>
            <Line
              x1={`${x1}%`}
              y1={SQUARE.height + NODE_Y_MARGIN + LINE_HEIGHT}
              x2={`${x1}%`}
              y2={SQUARE.height + NODE_Y_MARGIN + LINE_HEIGHT + LINE_HEIGHT}
              stroke={LINE_COLOR}
              strokeWidth={LINE_STROKE}
            />
            <Rect
              x={`${x1 - SQUARE.width / 4}%`}
              y={
                SQUARE.height +
                NODE_Y_MARGIN +
                LINE_HEIGHT +
                LINE_HEIGHT +
                NODE_Y_MARGIN
              }
              width={SQUARE.width}
              height={SQUARE.height}
              rx={SQUARE.r}
              fill={NODE_BG_COLOR}
            />
            <Text
              x={`${x1 - 'wdlcmdlcmdow'.length / 1.5}%`}
              y={
                SQUARE.height +
                NODE_Y_MARGIN +
                LINE_HEIGHT +
                LINE_HEIGHT +
                NODE_Y_MARGIN +
                SQUARE.height +
                NODE_Y_MARGIN +
                5
              }
              fontSize="5"
              fill="#000">
              <TSpan>wdlcmdlcmdow</TSpan>
            </Text>
          </>
        );
      })}
    </Svg>
  );
}

export default FamilyNode;

FamilyNode.propTypes = {
  chidrens: PropTypes.array,
};

FamilyNode.defaultProps = {
  chidrens: [],
};
