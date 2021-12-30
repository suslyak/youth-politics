import {putCountries} from "./action";  
import {APIRoute} from "../const";
  
  
export const fetchCountriesList = () => (dispatch, _getState, api) => (
api.get(`${APIRoute.DICT}?entity=Country`)
    .then(({data}) => {
    dispatch(putCountries(data));
    })
);

  