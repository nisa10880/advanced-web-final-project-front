import {
  getProfessors,
  getProfessorsLoading,
  getProfessorsSuccess,
  getProfessorsFailure,
} from '../../state/professors/professors-actions';
import { api } from '../../api';

jest.mock('../../api');

describe('Professors actions', () => {
  describe('getProfessors', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
      jest.resetAllMocks();
    });

    it('works properly', async () => {
      const professors = [
        {
          id: 1,
          firstname: 'John',
          lastname: 'Doe',
          gender: 'M',
        },
      ];

      api.get.mockResolvedValue({
        data: professors,
      });

      await getProfessors()(dispatch);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, getProfessorsLoading());
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        getProfessorsSuccess(professors),
      );
    });

    it('dispatches a failure action when an error occurs', async () => {
      const err = new Error('Huho');
      api.get.mockRejectedValue(err);

      await expect(getProfessors()(dispatch)).rejects.toThrowError(err);

      expect(api.get).toHaveBeenCalledTimes(1);
      expect(api.get).toHaveBeenCalledWith('/professors');
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, getProfessorsLoading());
      expect(dispatch).toHaveBeenNthCalledWith(2, getProfessorsFailure(err));
    });
  });
});
