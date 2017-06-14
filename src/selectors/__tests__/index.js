import { mealsGroupByDaySelector } from '../index';


describe('mealsGroupByDaySelector', () => {
  it('should return empty array for state with empty meals', () => {
    expect(
      mealsGroupByDaySelector({
        meals: {
          isLoading: false,
          meals: [],
          filter: {
            fromDate: null,
            fromTime: null,
            toDate: null,
            toTime: null,
          },
        },
        auth: {
          user: {
            email: 'admin@mail.com',
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should return array grouped by days for state with meals and without filter', () => {
    expect(
      mealsGroupByDaySelector({
        meals: {
          isLoading: false,
          meals: [{
            _id: '593d09bc774a7554bf4c22ed',
            updatedAt: '2017-06-11T09:21:59.539Z',
            createdAt: '2017-06-11T09:13:32.768Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: 'd4df9322-3152-45d7-9581-f0cc65082e31',
            date: '2017-06-11T09:13:00.000Z',
            meal: 'user',
            calories: 22,
          }, {
            _id: '593d0ba7774a7554bf4c22ee',
            updatedAt: '2017-06-11T09:49:45.789Z',
            createdAt: '2017-06-11T09:21:43.111Z',
            userId: '6d6ad323-0710-4f30-9a40-24090bf97448',
            userEmail: 'user2@mail.com',
            id: 'b917094b-00e9-4c76-bc66-bf2cb3652f04',
            date: '2017-06-11T09:21:00.000Z',
            meal: 'user2',
            calories: 10,
          }, {
            _id: '593d0c59774a7554bf4c22ef',
            updatedAt: '2017-06-11T09:49:55.827Z',
            createdAt: '2017-06-11T09:24:41.394Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: '8e33b1c4-3c14-4529-afec-d24971438caa',
            date: '2017-06-11T09:24:00.000Z',
            meal: 'user',
            calories: 331,
          }, {
            _id: '593d0cbc774a7554bf4c22f0',
            updatedAt: '2017-06-11T09:26:20.698Z',
            createdAt: '2017-06-11T09:26:20.698Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: 'f8373f77-1afb-4c7c-b10d-f0be24e26efa',
            date: '2017-06-07T09:26:00.000Z',
            meal: 'user',
            calories: 30,
          }, {
            _id: '593d0f12774a7554bf4c22f1',
            updatedAt: '2017-06-11T09:36:18.419Z',
            createdAt: '2017-06-11T09:36:18.419Z',
            userId: '6d6ad323-0710-4f30-9a40-24090bf97448',
            userEmail: 'user2@mail.com',
            id: '174b452c-d094-42e0-abc0-0df0b0a72560',
            date: '2017-06-05T09:36:00.000Z',
            meal: 'user2',
            calories: 221,
          }, {
            _id: '593d0f33774a7554bf4c22f3',
            updatedAt: '2017-06-11T09:36:51.954Z',
            createdAt: '2017-06-11T09:36:51.954Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: 'd0bb5edc-a9ea-44b6-ab61-b1cfdbd69a2a',
            date: '2017-06-11T09:36:00.000Z',
            meal: 'user',
            calories: 33,
          }, {
            _id: '593d124de3f1e3632262df06',
            updatedAt: '2017-06-14T09:49:54.216Z',
            createdAt: '2017-06-11T09:50:05.360Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: '92d155ce-0fc1-4647-9a3a-a1a5969358af',
            date: '2017-06-11T09:50:00.000Z',
            meal: 'user',
            calories: 993,
          }, {
            _id: '593e42829c0897020c694a77',
            updatedAt: '2017-06-12T07:28:02.686Z',
            createdAt: '2017-06-12T07:28:02.686Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'admin@mail.com',
            id: 'bdc20331-1f8d-46f4-8c2a-a2cf19ff4c69',
            date: '2017-06-12T06:00:00.000Z',
            meal: 'myMeal',
            calories: 12,
          }, {
            _id: '59412ee30b48971457fd3fb3',
            updatedAt: '2017-06-14T12:41:07.089Z',
            createdAt: '2017-06-14T12:41:07.089Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'admin@mail.com',
            id: '97852ec8-6094-4773-9f48-dbf13d202f22',
            date: '2017-06-14T12:40:00.000Z',
            meal: 'food',
            calories: 87,
          }],
          filter: {
            fromDate: null,
            fromTime: null,
            toDate: null,
            toTime: null,
          },
        },
        auth: {
          user: {
            email: 'admin@mail.com',
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should return array grouped by days for state with meals and with filter', () => {
    expect(
      mealsGroupByDaySelector({
        meals: {
          isLoading: false,
          meals: [{
            _id: '593d09bc774a7554bf4c22ed',
            updatedAt: '2017-06-11T09:21:59.539Z',
            createdAt: '2017-06-11T09:13:32.768Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: 'd4df9322-3152-45d7-9581-f0cc65082e31',
            date: '2017-06-11T09:13:00.000Z',
            meal: 'user',
            calories: 22,
          }, {
            _id: '593d0ba7774a7554bf4c22ee',
            updatedAt: '2017-06-11T09:49:45.789Z',
            createdAt: '2017-06-11T09:21:43.111Z',
            userId: '6d6ad323-0710-4f30-9a40-24090bf97448',
            userEmail: 'user2@mail.com',
            id: 'b917094b-00e9-4c76-bc66-bf2cb3652f04',
            date: '2017-06-11T09:21:00.000Z',
            meal: 'user2',
            calories: 10,
          }, {
            _id: '593d0c59774a7554bf4c22ef',
            updatedAt: '2017-06-11T09:49:55.827Z',
            createdAt: '2017-06-11T09:24:41.394Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: '8e33b1c4-3c14-4529-afec-d24971438caa',
            date: '2017-06-11T09:24:00.000Z',
            meal: 'user',
            calories: 331,
          }, {
            _id: '593d0cbc774a7554bf4c22f0',
            updatedAt: '2017-06-11T09:26:20.698Z',
            createdAt: '2017-06-11T09:26:20.698Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: 'f8373f77-1afb-4c7c-b10d-f0be24e26efa',
            date: '2017-06-07T09:26:00.000Z',
            meal: 'user',
            calories: 30,
          }, {
            _id: '593d0f12774a7554bf4c22f1',
            updatedAt: '2017-06-11T09:36:18.419Z',
            createdAt: '2017-06-11T09:36:18.419Z',
            userId: '6d6ad323-0710-4f30-9a40-24090bf97448',
            userEmail: 'user2@mail.com',
            id: '174b452c-d094-42e0-abc0-0df0b0a72560',
            date: '2017-06-05T09:36:00.000Z',
            meal: 'user2',
            calories: 221,
          }, {
            _id: '593d0f33774a7554bf4c22f3',
            updatedAt: '2017-06-11T09:36:51.954Z',
            createdAt: '2017-06-11T09:36:51.954Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: 'd0bb5edc-a9ea-44b6-ab61-b1cfdbd69a2a',
            date: '2017-06-11T09:36:00.000Z',
            meal: 'user',
            calories: 33,
          }, {
            _id: '593d124de3f1e3632262df06',
            updatedAt: '2017-06-14T09:49:54.216Z',
            createdAt: '2017-06-11T09:50:05.360Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'user@mail.com',
            id: '92d155ce-0fc1-4647-9a3a-a1a5969358af',
            date: '2017-06-11T09:50:00.000Z',
            meal: 'user',
            calories: 993,
          }, {
            _id: '593e42829c0897020c694a77',
            updatedAt: '2017-06-12T07:28:02.686Z',
            createdAt: '2017-06-12T07:28:02.686Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'admin@mail.com',
            id: 'bdc20331-1f8d-46f4-8c2a-a2cf19ff4c69',
            date: '2017-06-12T06:00:00.000Z',
            meal: 'myMeal',
            calories: 12,
          }, {
            _id: '59412ee30b48971457fd3fb3',
            updatedAt: '2017-06-14T12:41:07.089Z',
            createdAt: '2017-06-14T12:41:07.089Z',
            userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
            userEmail: 'admin@mail.com',
            id: '97852ec8-6094-4773-9f48-dbf13d202f22',
            date: '2017-06-14T12:40:00.000Z',
            meal: 'food',
            calories: 87,
          }],
          filter: {
            fromDate: '2017-06-10T21:00:00.000Z',
            fromTime: '2017-06-14T03:00:57.055Z',
            toDate: '2017-06-11T21:00:00.000Z',
            toTime: '2017-06-14T18:00:11.646Z',
          },
        },
        auth: {
          user: {
            email: 'admin@mail.com',
          },
        },
      }),
    ).toMatchSnapshot();
  });
});
