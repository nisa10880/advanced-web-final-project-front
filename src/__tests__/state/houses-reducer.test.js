import { housesReducer } from '../../state/houses/houses-reducer';
import {
  getHousesLoading,
  getHousesSuccess,
} from '../../state/houses/houses-actions';

describe('House reducer', () => {
  it('sets the loading property to true when loading houses', () => {
    expect(housesReducer(undefined, getHousesLoading()).loading).toBe(true);
  });

  it('sets loading to false and retrieves the list of houses', () => {
    const houses = [
      { id: 1, name: 'Gryffindor', points: '1380' },
      { id: 2, name: 'Hufflepuff', points: '0' },
      { id: 3, name: 'Ravenclaw', points: '200' },
      { id: 4, name: 'Slytherin', points: '10' },
    ];

    const state = housesReducer(undefined, getHousesSuccess(houses));
    expect(state.loading).toBe(false);
    expect(state.houses).toBe(houses);
  });

  it('ignores other actions', () => {
    const state = {
      loading: false,
      houses: [],
    };

    expect(housesReducer(state, { type: 'OTHER_ACTION' })).toBe(state);
  });
});
