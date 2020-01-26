import {
  getStudents,
  getStudentsLoading,
  getStudentsSuccess,
  getStudentsFailure,
} from '../../state/students/students-actions';
import { api } from '../../api';

jest.mock('../../api');

describe('Students actions', () => {
  describe('getStudents', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
      jest.resetAllMocks();
    });

    it('works properly', async () => {
      const students = [
        {
          id: 1,
          firstname: 'John',
          lastname: 'Doe',
          gender: 'M',
          id_house: 1,
        },
      ];

      api.get.mockResolvedValue({
        data: students,
      });

      await getStudents()(dispatch);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, getStudentsLoading());
      expect(dispatch).toHaveBeenNthCalledWith(2, getStudentsSuccess(students));
    });

    it('dispatches a failure action when an error occurs', async () => {
      const err = new Error('Huho');
      api.get.mockRejectedValue(err);

      await expect(getStudents()(dispatch)).rejects.toThrowError(err);

      expect(api.get).toHaveBeenCalledTimes(1);
      expect(api.get).toHaveBeenCalledWith('/students');
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, getStudentsLoading());
      expect(dispatch).toHaveBeenNthCalledWith(2, getStudentsFailure(err));
    });
  });
});
