import _ from 'lodash'
import { getRandomColor } from '../colors'

const points = [
    { 'x': 'one', 'top-1': 10, 'top-2': 3 },
    { 'x': 'two', 'top-1': 11, 'top-2': 3 },
    { 'x': 'three', 'top-1': 12, 'top-2': 3 },
    { 'x': 'four', 'top-1': 13, 'top-2': 3 },
    { 'x': 'five', 'top-1': 14, 'top-2': 3 }
];

const columns = [
    { id: 'top-1', type: 'line', 'name': 'Top one' },
    { id: 'top-2', type: 'spline', 'name': 'Top one' }
];

const refresh = (points, columns) => {
    points.forEach(function (i) {
        i['top-1'] = _.random(0, 50);
        i['top-2'] = _.random(0, 50);
    });

    columns.forEach((c) => c.color = getRandomColor());
}

export { points, columns, refresh }