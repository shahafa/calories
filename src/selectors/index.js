/* eslint-disable max-len */

import { createSelector } from 'reselect';
import moment from 'moment';
import { groupBy } from 'lodash';

export const mealsGroupByDaySelector = createSelector(
  [state => state.meals.meals, state => state.meals.filter],
  (meals, filter) => {
    const fromDateFilter = filter.fromDate === null ? false : moment(filter.fromDate).startOf('day');
    const toDateFilter = filter.toDate === null ? false : moment(filter.toDate).endOf('day');
    const fromTimeFilter = filter.fromTime === null ? false : moment({ hour: moment(filter.fromTime).hour(), minute: moment(filter.fromTime).minute() });
    const toTimeFilter = filter.toTime === null ? false : moment({ hour: moment(filter.toTime).hour(), minute: moment(filter.toTime).minute() });

    const groupByObject = groupBy(meals, meal => moment(meal.date).startOf('day').utc().format());

    return Object
      .keys(groupByObject)
      .sort((left, right) => moment(right).diff(moment(left)))
      .filter(date => !fromDateFilter || moment(date).endOf('day').isSameOrAfter(fromDateFilter))
      .filter(date => !toDateFilter || moment(date).startOf('day').isSameOrBefore(toDateFilter))
      .map(date => ({
        date: moment(date),
        meals: groupByObject[date]
                .filter(meal => !fromTimeFilter || moment({ hour: moment(meal.date).hour(), minute: moment(meal.date).minute() }).isSameOrAfter(fromTimeFilter))
                .filter(meal => !toTimeFilter || moment({ hour: moment(meal.date).hour(), minute: moment(meal.date).minute() }).isSameOrBefore(toTimeFilter))
                .sort((left, right) => moment.utc(right.date).diff(moment.utc(left.date))),
      }));
  },
);
