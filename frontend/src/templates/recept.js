import React from 'react';
import { graphql, Link } from 'gatsby';

export default function Recept({ data }) {
  const {
    nev,
    _id,
    hozzavalok,
    elkeszites,
    receptForrasa: { text, url },
  } = data.recept;
  return (
    <>
      <Link to='/'>Vissza</Link>
      <h1>{nev}</h1>
      {url && (
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      )}
      <p>{hozzavalok}</p>
      <p>{elkeszites}</p>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    recept: sanityRecept(slug: { current: { eq: $slug } }) {
      _id
      nev
      hozzavalok
      elkeszites
      receptForrasa {
        text
        url
      }
    }
  }
`;
