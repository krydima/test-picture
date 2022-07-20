export function ImgExample() {
  return (
    <img
      src="/test-picture/default-small.jpg"
      srcSet="/test-picture/default-small.jpg 1x, /test-picture/default-medium.jpg 2x"
      alt="Cat"
    />
  );
}
