import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div>
        <span>Img</span>
        <ul>
          <li>
            <Link to="/img-example">example</Link>
          </li>
          <li>
            <Link to="/img-example-order-fixed">order fix</Link>
          </li>
        </ul>
      </div>
      <div>
        <span>Picture</span>
        <ul>
          <li>
            <Link to="/picture-example">example</Link>
          </li>
          <li>
            <Link to="/picture-example-inner-html-fixed">inner html fix</Link>
          </li>
          <li>
            <Link to="/picture-example-lazy-fixed">lazy loading fix</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
