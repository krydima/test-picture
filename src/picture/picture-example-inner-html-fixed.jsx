function getPictureAsInnerHTML() {
  const html = /* html */ `
<picture>
  <source
    media="(min-width: 700px)"
    srcSet="/test-picture/wide-small.jpg 1x, /test-picture/wide-medium.jpg 2x"
  />
  <source
    media="(min-width: 450px)"
    srcSet="/test-picture/narrow-small.jpg 1x, /test-picture/narrow-medium.jpg 2x"
  />
  <img
    srcSet="/test-picture/default-small.jpg 1x, /test-picture/default-medium.jpg 2x"
    src="/test-picture/default-small.jpg"
    alt="Cat"
  />
</picture>`;
  return { __html: html };
}

export function PictureExampleInnerHTMLFixed() {
  return <div dangerouslySetInnerHTML={getPictureAsInnerHTML()} />;
}
