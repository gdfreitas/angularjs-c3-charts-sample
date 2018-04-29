import _ from 'lodash'

const DEFAULT_COLORS = [
    '#0099de',
    '#00bd9c',
    '#ff9d00',
    '#ff4b38',
    '#8fa6a8',
    '#af58ba',
    '#0081bc',
    '#00a185',
    '#ff7f0b',
    '#7a8d8e',
    '#00af5a',
    '#a242b1',
    '#df3626',
    '#00cd6b',
    '#000000'
];

const getRandomColor = () => {
    return DEFAULT_COLORS[_.random(0, DEFAULT_COLORS.length)];
};

export { DEFAULT_COLORS, getRandomColor }