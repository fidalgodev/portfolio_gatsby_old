import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preconnect" href="https://www.google-analytics.com" />,
    <link rel="preconnect" href="https://marketingplatform.google.com" />,
    <link rel="preconnect" href="https://google.com" />,
    <link rel="preconnect" href="https://www.google.com" />,
  ]);
};
