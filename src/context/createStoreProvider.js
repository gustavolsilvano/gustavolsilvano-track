import React from "react";

const createStoreProvider = provider => ({ children }) =>
  provider
    .reverse()
    .reduce((tree, Provider) => <Provider>{tree}</Provider>, children);

export default createStoreProvider;
