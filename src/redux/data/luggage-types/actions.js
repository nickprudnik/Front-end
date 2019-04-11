import axios from '../../../data';
import actionTypes from '../actionTypes';

function getLuggageTypes(luggageTypes) {
  return {
    type: actionTypes.GET_LUGGAGE_TYPES,
    luggageTypes,
  };
}

function hasErrored(bool) {
  return {
    type: actionTypes.LUGGAGE_HAS_ERRORED,
    hasErrored: bool,
  };
}

export default function fetchLuggageTypes(url) {
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        if (!response.data.luggage.length) {
          throw Error('Info is not found');
        }

        return response;
      })
      .then(response => response.data.luggage)
      .then(luggageTypes => dispatch(getLuggageTypes(luggageTypes)))
      .catch(() => dispatch(hasErrored(true)));
  };
}
