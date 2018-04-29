import _ from 'lodash'

import * as gauge from './charts/gauge';
import * as pie from './charts/pie';
import * as donut from './charts/donut';
import * as horizontalBar from './charts/horizontal-bar';
import * as verticalBar from './charts/vertical-bar';
import * as line from './charts/line';

import { DEFAULT_COLORS, getRandomColor } from './colors'

export default class AppCtrl {

    constructor($interval) {
        const vm = this;

        this.transitionDuration = 1500;

        Object.assign(vm, {
            $interval, DEFAULT_COLORS, gauge, pie, donut, horizontalBar, verticalBar, line
        })
    }

    refresh() {
        gauge.refresh(this.gauge.points, this.gauge.columns)
        pie.refresh(this.pie.points, this.pie.columns);
        donut.refresh(this.donut.points, this.donut.columns);
        horizontalBar.refresh(this.horizontalBar.points, this.horizontalBar.columns)
        verticalBar.refresh(this.verticalBar.points, this.verticalBar.columns)
        line.refresh(this.line.points, this.line.columns)
    }

    formatLabel(value, ratio) {
        return (ratio * 100).toFixed(0) + '%';
    }

    tooltipTitleFormat(data) {
        return data;
    }
}