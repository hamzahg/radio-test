import React, { useState, createContext } from 'react';
import mockData from '../../__mockData__/mockData.json';

const defaultState = {
  stations: mockData.stations,
  currentTrack: 0,
};

export const StoreContext = createContext(defaultState);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ children }) => {
  const [stations, setStations] = useState(defaultState.stations);
  const [currentTrack, setCurrentTrack] = useState(defaultState.currentTrack);

  const store = {
    stations,
    setStations,
    currentTrack,
    setCurrentTrack,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
