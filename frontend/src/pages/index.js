import * as React from 'react';
import { graphql, Link } from 'gatsby';

const IndexPage = ({ data }) => {
  const receptek = data.allSanityRecept.nodes;
  return (
    <main>
      <h1>Dóri receptjei</h1>
      <ul>
        {receptek.map(({ _id, nev, slug }) => (
          <li key={_id}>
            <Link to={`/recept/${slug.current}`}>{nev}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allSanityRecept {
      nodes {
        _id
        nev
        slug {
          current
        }
      }
    }
  }
`;
