/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { AppContext } from '../../AppContext';
import NodeAvatar from '../core/NodeAvatar';

const LINE_COLOR = '#C4C4C4';
const LINE_STROKE = 2;
const LINE_HEIGHT = 20;
const LINE_TOP_MARGIN = 2;
const TOTAL_WIDTH = 100;
// const LINE_X1 = TOTAL_WIDTH / childrenCount / 2;
// const LINE_X2 = TOTAL_WIDTH - LINE_X1;
const VERTICAL_SPACE = 20;
const NODE_BG_COLOR = '#E4A951';
const NODE_BG_LIGHT_COLOR = '#FFD233';
const MALE_NODE_BORDER_COLOR = '#0073B6';
const FEMALE_NODE_BORDER_COLOR = '#DC0D85';
const NODE_Y_MARGIN = 2;

const SQUARE = {
  width: 30,
  height: 30,
  r: 30,
};

const Node = ({ node, top }) => {
  const { _id, childrens = [] } = node;
  const [stateChilds, setStateChilds] = React.useState(childrens);
  const { userId } = React.useContext(AppContext);
  const hasChildren = stateChilds.length > 0;
  const isNodeOwner = userId === _id;

  const addChilds = () => {
    setStateChilds([{ name: 'new', childrens: [] }, ...stateChilds]);
  };

  return (
    <View className="flex justify-center items-center">
      {!top && (
        <View className="flex justify-center items-center h-5 border border-slate-400 " />
      )}
      <NodeAvatar node={node} addChilds={addChilds} />
      {hasChildren && (
        <View className="flex justify-center items-center h-5 border border-slate-400 " />
      )}
      <View
        className={`flex flex-row  ${
          hasChildren && stateChilds.length > 1
            ? 'border-t-2 border-slate-400'
            : ''
        } items-start  justify-evenly mr-5 ml-5`}>
        {stateChilds.map((child, index) => (
          <ChildrenNode key={index} node={child} />
        ))}
      </View>
    </View>
  );
};

const ChildrenNode = ({ node }) => {
  const { childrens = [] } = node;
  const [stateChilds, setStateChilds] = React.useState(childrens);
  const { userId } = React.useContext(AppContext);
  const hasChildren = stateChilds.length > 0;

  const addChilds = () => {
    setStateChilds([{ name: 'new', childrens: [] }, ...stateChilds]);
  };

  const makeChildEditable = () => {
    const childs = stateChilds.map(child => ({ ...child, editable: true }));
    setStateChilds(childs);
  };

  const removeChildEditable = () => {
    const childs = stateChilds.map(child => ({ ...child, editable: false }));
    setStateChilds(childs);
  };

  return (
    <View className="flex justify-center items-center">
      <View className="flex justify-center items-center h-5 border border-slate-400" />
      <NodeAvatar
        node={node}
        addChilds={addChilds}
        makeChildEditable={makeChildEditable}
        removeChildEditable={removeChildEditable}
      />
      {hasChildren && (
        <View className="flex h-5  justify-center items-center border border-slate-400" />
      )}
      <View
        className={`flex flex-row  ${
          hasChildren && stateChilds.length > 1
            ? 'border-t-2 border-slate-400'
            : ''
        } items-start  justify-between mr-5 ml-5 `}>
        {stateChilds.map((child, index) => (
          <Node key={index} node={child} />
        ))}
      </View>
    </View>
  );
};

ChildrenNode.propTypes = {
  node: PropTypes.object,
};

ChildrenNode.defaultProps = {
  node: {
    name: '',
    childrens: [],
  },
};

Node.propTypes = {
  top: PropTypes.bool,
  node: PropTypes.object,
};

Node.defaultProps = {
  top: false,
  node: {
    name: '',
    childrens: [],
  },
};

export default Node;
