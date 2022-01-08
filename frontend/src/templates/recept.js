import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';

export default function Recept({ data }) {
  const {
    nev,
    _id,
    hozzavalok,
    elkeszites,
    receptForrasa: { text, url },
    kep,
  } = data.recept;
  const hozzavalokList = hozzavalok.split('\n').map((e, idx) => {
    return <li key={idx}>{e}</li>;
  });

  const elkeszitesList = elkeszites.split('\n').map((e, idx) => {
    return <p key={idx}>{e}</p>;
  });

  return (
    <>
      <Link to='/'>Vissza</Link>
      <h1 style={{ marginBottom: 0 }}>{nev}</h1>
      {url && (
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'blue' }}
        >
          {text}
        </a>
      )}
      <Img {...kep} alt='kep' />
      <ul>{hozzavalokList}</ul>
      <div>{elkeszitesList}</div>
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
      kep {
        ...ImageWithPreview
      }
    }
  }
`;
