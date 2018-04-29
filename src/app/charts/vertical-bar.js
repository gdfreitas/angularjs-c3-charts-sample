import _ from 'lodash'
import { getRandomColor } from '../colors'

const emptyLabel = 'Não há dados para exibir';
const chartHeight = 250;
const chartWidth = 500;

const groupBy = 'saldo,gasto';

const groupNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']

const points = [
    { 'saldo': 10, 'gasto': 5 },
    { 'saldo': 11, 'gasto': 5 },
    { 'saldo': 12, 'gasto': 5 },
    { 'saldo': 13, 'gasto': 5 },
    { 'saldo': 14, 'gasto': 5 }
];

const columns = [
    { id: 'saldo', name: 'Saldo (R$)', type: 'bar', color: '#8eb9ff' },
    { id: 'gasto', name: 'Gasto (R$)', type: 'bar', color: '#c3c3c3' }
];

const refresh = (points, columns) => {
    points.forEach((point) => {
        point['saldo'] = _.random(0, 50);
        point['gasto'] = _.random(0, 50);
    });
    columns.forEach((column) => column.color = getRandomColor());
}

const tooltipTitleFormat = (index) => {
    return groupNames[index];
}

export { emptyLabel, chartHeight, chartWidth, groupBy, points, columns, refresh, tooltipTitleFormat }