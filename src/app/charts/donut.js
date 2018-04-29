import _ from 'lodash'
import { getRandomColor } from '../colors'

const title = 'Desgaste por peça'
const emptyLabel = 'Não há dados para exibir';
const chartHeight = 250;
const chartWidth = 500;

const points = [
    { 'bracadeira': 45, 'parafuso': 15, 'broca': 10, 'britadeira': 20 }
];

const columns = [
    { id: 'bracadeira', name: 'Braçadeira', type: 'donut' },
    { id: 'parafuso', name: 'Parafuso', type: 'donut' },
    { id: 'broca', name: 'Broca', type: 'donut' },
    { id: 'britadeira', name: 'Britadeira', type: 'donut' }
];

const refresh = (points, columns) => {
    points[0]['data1'] = _.random(0, 25);
    points[0]['data2'] = _.random(0, 25);
    points[0]['data3'] = _.random(0, 25);

    columns.forEach((c) => c.color = getRandomColor());
}

export { title, emptyLabel, chartHeight, chartWidth, points, columns, refresh }