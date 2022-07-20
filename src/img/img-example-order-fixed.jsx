export function ImgExampleOrderFixed() {
  return (
    <img
      srcSet="/test-picture//default-small.jpg 1x, /test-picture/default-medium.jpg 2x"
      src="/test-picture/default-small.jpg"
      alt="Cat"
    />
  );
}
