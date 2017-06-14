
import React from 'react';
import renderer from 'react-test-renderer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import AddMealButton from '../AddMealButton';
import AddMealDialog from '../AddMealDialog';
import DailyMealsCard from '../DailyMealsCard';
import DeleteMealDialog from '../DeleteMealDialog';
import DeleteUserDialog from '../DeleteUserDialog';
import HomeShell from '../HomeShell';
import Main from '../Main';
import NavigationMenu from '../NavigationMenu';
import NoMeals from '../NoMeals';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

test('AddMealButton should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <AddMealButton
        onClick={() => {}}
      />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('AddMealDialog should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <AddMealDialog
        isOpen
        onAddMealClick={() => {}}
        onEditMealClick={() => {}}
        onCancelClick={() => {}}
        userEmail="user@mail.com"
      />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DailyMealsCard should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <DailyMealsCard
        isAdmin={false}
        dailyMeals={{
          date: moment('2017-06-13T21:00:00.000Z'),
          meals: [{
            userEmail: 'admin@mail.com',
            id: '97852ec8-6094-4773-9f48-dbf13d202f22',
            date: '2017-06-14T12:40:00.000Z',
            meal: 'food',
            calories: 87,
          }],
        }}
        onEditMealClick={() => {}}
        onDeleteMealClick={() => {}}
        numberOfCaloriesPerDay={100}
      />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DeleteMealDialog should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <DeleteMealDialog
        isOpen
        onCancelClick={() => {}}
        onDeleteClick={() => {}}
        meal={{
          userEmail: 'admin@mail.com',
          id: '97852ec8-6094-4773-9f48-dbf13d202f22',
          date: '2017-06-14T12:40:00.000Z',
          meal: 'food',
          calories: 87,
        }}
      />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DeleteUserDialog should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <DeleteUserDialog
        isOpen
        onCancelClick={() => {}}
        onDeleteClick={() => {}}
        user={{
          id: '9e65644e-e326-48d9-be7d-7d13f8b36992',
          email: 'user@mail.com',
          role: 'user',
        }}
      />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeShell should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <HomeShell>
        <div />
      </HomeShell>
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Main should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Main>
        <div />
      </Main>
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('NavigationMenu should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <NavigationMenu
        userRole="admin"
        mealsActive
        usersActive={false}
        settingsActive={false}
        onMealsClick={() => {}}
        onUsersClick={() => {}}
        onSettingsClick={() => {}}
        onSignOutClick={() => {}}
      />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('NoMeals should render', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <NoMeals />
    </MuiThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
