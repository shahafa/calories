import { createSelector } from 'reselect';
import moment from 'moment';
import { groupBy } from 'lodash';

export const mealsGroupByDaySelector = createSelector(
  state => state.meals.meals,
  (meals) => {
    const groupByObject = groupBy(meals, meal => moment(meal.date).startOf('day').utc().format());

    return Object
      .keys(groupByObject)
      .sort((left, right) => moment(right).diff(moment(left)))
      .map(date => ({
        date: moment(date),
        meals: groupByObject[date].sort((left, right) =>
                moment.utc(right.date).diff(moment.utc(left.date))),
      }));
  },
);
