async function timeout(time) {
  const timeoutPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, time);
  });
  return timeoutPromise;
}

export default timeout;
