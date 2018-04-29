import _ from 'lodash'
import { getRandomColor } from '../colors'

const group = 'column1,column2';

const points = [
    { 'x': 'one', 'column1': 10 },
    { 'x': 'two', 'column1': 11 },
    { 'x': 'three', 'column1': 12 },
    { 'x': 'four', 'column1': 13 },
    { 'x': 'five', 'column1': 14 }
];

const columns = [
    { id: 'column1', name: 'Coluna 1', type: 'bar', color: '#8eb9ff' }
];

const refresh = (points, columns) => {
    points.forEach((i) => {
        i['column1'] = _.random(0, 50);
        i['column2'] = _.random(0, 50);
    });
    columns.forEach((c) => c.color = getRandomColor());
}

export { group, points, columns, refresh }