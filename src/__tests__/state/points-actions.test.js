import { addPoints, addPointsLoading, addPointsSuccess, addPointsFailure } from '../../state/points/points-actions';
import { api } from '../../api';
import { fetchData } from '../../state/fetchData';

jest.mock('../../api');
jest.mock('../../state/fetchData');

describe('addPoints', () => {
  const state = {
    students: {
      students: [
        {
          id: 1,
          firstname: 'John',
          lastname: 'Doe',
          gender: 'M',
          id_house: 5,
        }
      ]
    }
  };

  const values = {
    id_student: 1,
    id_professor: 1,
    nb_points: 100,
  };

  const expectedPayload = {
    ...values,
    id_house: 5,
  };

  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    jest.resetAllMocks();
  });


  it('processes the information and does the right calls', async () => {
    getState.mockReturnValue(state);

    await addPoints(values)(dispatch, getState);

    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/points', expectedPayload);
    expect(dispatch).toHaveBeenCalledWith(addPointsLoading());
    expect(dispatch).toHaveBeenCalledWith(addPointsSuccess(expectedPayload));
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  it('handles failures', async () => {
    const err = new Error("Huho");
    api.post.mockRejectedValue(err);
    getState.mockReturnValue(state);

    await expect(addPoints(values)(dispatch, getState)).rejects.toThrowError(err);
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/points', expectedPayload);
    expect(dispatch).toHaveBeenCalledWith(addPointsLoading());
    expect(dispatch).toHaveBeenCalledWith(addPointsFailure(err));
    expect(dispatch).not.toHaveBeenCalledWith(fetchData());
  });
});