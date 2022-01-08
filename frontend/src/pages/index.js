import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { ContainerStyles } from '../styles/ContainerStyles';

const IndexPage = ({ data }) => {
  const receptek = data.allSanityRecept.nodes;
  return (
    <ContainerStyles>
      <h1>Dóri receptjei</h1>
      <ul>
        {receptek.map(({ _id, nev, slug }) => (
          <li key={_id}>
            <Link to={`/recept/${slug.current}`}>{nev}</Link>
          </li>
        ))}
      </ul>
    </ContainerStyles>
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
