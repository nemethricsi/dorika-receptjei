import * as React from 'react';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const receptek = data.allSanityRecept.nodes;
  return (
    <main>
      <h1>Dóri receptjei</h1>
      <ul>
        {receptek.map(({ _id, nev }) => (
          <li key={_id}>{nev}</li>
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
        nev
        _id
      }
    }
  }
`;
