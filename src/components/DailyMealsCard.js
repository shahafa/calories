import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Card } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { green600, green300 } from 'material-ui/styles/colors';

const styles = {
  root: {
    margin: '50px auto 0 auto',
    maxWidth: '720px',
  },

  header: {
    boxSizing: 'border-box',
    height: '55px',
    padding: '16px',
    background: `linear-gradient(to right, ${green600}, ${green300})`,
    color: 'white',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '300',
  },

  editButton: {
    cursor: 'pointer',
    height: '18px',
    width: '18px',
    marginRight: '4px',
  },

  deleteButton: {
    cursor: 'pointer',
    height: '18px',
    width: '18px',
  },
};

const DailyMealsCard = ({
  dailyMeals,
  onEditMealClick,
  onDeleteMealClick,
}) => (
  <div style={styles.root}>
    <Card>
      <div style={styles.header}>
        <div>
          {dailyMeals.date.calendar(null, {
            sameDay: '[Today]',
            lastDay: '[Yesterday]',
            nextDay: '[Tomorrow]',
            nextWeek: 'MMMM D',
            lastWeek: 'MMMM D',
            sameElse: 'MMMM D',
          })}
        </div>
      </div>
      <Table>
        <TableHeader
          selectable={false}
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow selectable={false}>
            <TableHeaderColumn>Time</TableHeaderColumn>
            <TableHeaderColumn>Meal</TableHeaderColumn>
            <TableHeaderColumn>Calories</TableHeaderColumn>
            <TableHeaderColumn style={{ width: '37px' }} />
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {dailyMeals.meals.map(meal => (
            <TableRow
              key={meal.id}
              selectable={false}
            >
              <TableRowColumn>{moment(meal.date).format('HH:mm')}</TableRowColumn>
              <TableRowColumn>{meal.meal}</TableRowColumn>
              <TableRowColumn>{meal.calories}</TableRowColumn>
              <TableRowColumn style={{ width: '37px' }}>
                <EditIcon
                  color="#9E9E9E"
                  style={styles.editButton}
                  onClick={() => onEditMealClick(meal)}
                />
                <DeleteIcon
                  color="#9E9E9E"
                  style={styles.deleteButton}
                  onClick={() => onDeleteMealClick(meal)}
                />
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
);

DailyMealsCard.propTypes = {
  dailyMeals: PropTypes.object.isRequired,
  onEditMealClick: PropTypes.func.isRequired,
  onDeleteMealClick: PropTypes.func.isRequired,
};

export default DailyMealsCard;
