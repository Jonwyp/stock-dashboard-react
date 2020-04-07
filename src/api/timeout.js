async function timeout(time) {
  const timeoutPromise = new Promise(res => {
    setTimeout(() => {
      res(true);
    }, time);
  });
  return timeoutPromise;
}

export default timeout;
