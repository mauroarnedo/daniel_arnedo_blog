export default function Delay(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
    }).then(() => promise);
}