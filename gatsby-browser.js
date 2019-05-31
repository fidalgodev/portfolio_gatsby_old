export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Fidalgo just updated his website. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
