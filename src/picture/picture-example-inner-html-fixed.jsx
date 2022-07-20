function getPictureAsInnerHTML() {
  const html = /* html */ `
<picture>
  <source
    media="(min-width: 700px)"
    srcSet="/wide-small.jpg 1x, /wide-medium.jpg 2x"
  />
  <source
    media="(min-width: 450px)"
    srcSet="/narrow-small.jpg 1x, /narrow-medium.jpg 2x"
  />
  <img
    srcSet="/default-small.jpg 1x, /default-medium.jpg 2x"
    src="/default-small.jpg"
    alt="Cat"
  />
</picture>`;
  return { __html: html };
}

export function PictureExampleInnerHTMLFixed() {
  return <div dangerouslySetInnerHTML={getPictureAsInnerHTML()} />;
}
