import _ from 'lodash'
import { getRandomColor } from '../colors'

const emptyLabel = 'Não há dados para exibir';
const chartHeight = 250;
const chartWidth = 500;


const points = [
    { 'poupanca': 25, 'rendaFixa': 25, 'tesouroDireto': 25, 'acoes': 25 }
];

const columns = [
    { id: 'poupanca', name: 'Poupança', type: 'pie' },
    { id: 'rendaFixa', name: 'Renda fixa', type: 'pie' },
    { id: 'tesouroDireto', name: 'Tesouro direto', type: 'pie' },
    { id: 'acoes', name: 'Ações', type: 'pie' }
];

const refresh = (points, columns) => {
    points[0]['poupanca'] = _.random(0, 25);
    points[0]['rendaFixa'] = _.random(0, 25);
    points[0]['tesouroDireto'] = _.random(0, 25);
    points[0]['acoes'] = _.random(0, 25);

    columns.forEach((column) => {
        column.color = getRandomColor()
    });
}

export { emptyLabel, chartHeight, chartWidth, points, columns, refresh }