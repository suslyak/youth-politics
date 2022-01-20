import React from 'react';
import {ActionType} from '../action';
import { i18n } from '../../i18n';

const initialState = {
    locale: i18n[`ru`],
};

const locale = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PUT_LOCALE:
        {
          return {
            ...state,
            locale: i18n[action.payload],
        }};    
    default:
      return state;
  }
};

export {locale};
