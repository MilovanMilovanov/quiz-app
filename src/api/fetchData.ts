import wrapPromise from "../utils/wrapPromise";

export default function fetchData(url: string) {
  const promise = fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });

  return wrapPromise(promise);
}
