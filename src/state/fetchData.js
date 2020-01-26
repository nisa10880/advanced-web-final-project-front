import { getHouses } from './houses/houses-actions';
import { getProfessors } from './professors/professors-actions';
import { getStudents } from './students/students-actions';

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getHouses());
    dispatch(getProfessors());
    dispatch(getStudents());
  };
};
