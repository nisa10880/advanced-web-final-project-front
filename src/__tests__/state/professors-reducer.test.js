import { professorsReducer } from '../../state/professors/professors-reducer';
import {
  getProfessorsLoading,
  getProfessorsSuccess,
} from '../../state/professors/professors-actions';

describe('Professors reducer', () => {
  it('sets the loading property to true when loading professors', () => {
    expect(professorsReducer(undefined, getProfessorsLoading()).loading).toBe(
      true,
    );
  });

  it('sets loading to false and retrieves the list of professors', () => {
    const professors = [
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        gender: 'M',
      },
    ];

    const state = professorsReducer(
      undefined,
      getProfessorsSuccess(professors),
    );
    expect(state.loading).toBe(false);
    expect(state.professors).toBe(professors);
  });

  it('ignores other actions', () => {
    const state = {
      loading: false,
      professors: [],
    };

    expect(professorsReducer(state, { type: 'OTHER_ACTION' })).toBe(state);
  });
});
