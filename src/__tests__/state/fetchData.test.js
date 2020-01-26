import { fetchData } from '../../state/fetchData';
import { getHouses } from '../../state/houses/houses-actions';
import { getProfessors } from '../../state/professors/professors-actions';
import { getStudents } from '../../state/students/students-actions';

jest.mock('../../state/houses/houses-actions');
jest.mock('../../state/professors/professors-actions');
jest.mock('../../state/students/students-actions');

describe('fetchData', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    jest.resetAllMocks();
  });

  it('calls all 3 API endpoints', () => {
    fetchData()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(getHouses).toHaveBeenCalled();
    expect(getProfessors).toHaveBeenCalled();
    expect(getStudents).toHaveBeenCalled();
  });
});
