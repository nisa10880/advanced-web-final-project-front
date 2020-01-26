import { studentsReducer } from '../../state/students/students-reducer';
import { getStudentsLoading, getStudentsSuccess } from '../../state/students/students-actions';

describe('Students reducer', () => {
  it('sets the loading property to true when loading students', () => {
    expect(studentsReducer(undefined, getStudentsLoading()).loading).toBe(true);
  });

  it('sets loading to false and retrieves the list of students', () => {
    const students = [
      {
          id: 1,
          firstname: 'John',
          lastname: 'Doe',
          gender: 'M',
          id_house: 1,
      },
    ];

    const state = studentsReducer(undefined, getStudentsSuccess(students));
    expect(state.loading).toBe(false);
    expect(state.students).toBe(students);
  });

  it('ignores other actions', () => {
    const state = {
      loading: false,
      students: [],
    };

    expect(studentsReducer(state, { type: 'OTHER_ACTION' })).toBe(state);
  });
});
