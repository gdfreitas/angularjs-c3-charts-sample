import _ from 'lodash';
import { getRandomColor } from '../colors';

const units = 'horas';
const min = 0;
const max = 100;
const width = 90;
const emptyLabel = 'Não há dados para exibir';

const chartHeight = 250;
const chartWidth = 500;

const points = [
    { 'horasTrabalhadas': 70 }
];

const columns = [
    {
        id: 'horasTrabalhadas',
        name: 'Horas trabalhadas',
        type: 'gauge',
        color: 'green'
    }
];

const refresh = (points, columns) => {
    points[0]['horasTrabalhadas'] = _.random(0, 100);
    columns[0].color = getRandomColor();
}

export { units, min, max, width, emptyLabel, chartHeight, chartWidth, points, refresh, columns };