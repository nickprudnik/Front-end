import actionTypes from '../actionTypes';
import axios from '../../../data';

function getPlaneSchema(schema) {
  return {
    type: actionTypes.GET_PLANE_SCHEMA,
    schema,
  };
}

function hasErrored(bool) {
  return {
    type: actionTypes.PLANE_SCHEMA_HAS_ERRORED,
    hasErrored: bool,
  };
}

export default function fetchPlaneSchema(url) {
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('Info is not found');
        }

        return response;
      })
      .then(response => response.data)
      .then(schemas => dispatch(getPlaneSchema(schemas)))
      .then(() => dispatch(hasErrored(true)));
  };
}
