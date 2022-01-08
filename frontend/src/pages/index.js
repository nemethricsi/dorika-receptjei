import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-plugin-sanity-image';
import { graphql, Link } from 'gatsby';
import { ContainerStyles } from '../styles/ContainerStyles';
import SearchIcon from '../images/searchicon.png';

const SearchWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  padding: 9px 12px 6px;
  border-radius: 8px;
  margin: 0 auto;
  max-width: min(450px, 100%);
  background-color: hsla(65 100% 87% / 1);

  &:focus {
    outline: 1px solid red;
  }
`;

const SearchIconImage = styled.img`
  display: block;
  width: 20px;
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  display: block;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: hsla(65 100% 87% / 1);
`;

const ReceptList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li  {
    margin: 0;

    &:hover a {
      text-decoration: underline;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const RecipeTitleWrapper = styled.article`
  padding: 12px 10px 10px;
  /* width: max-content; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 40px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

const IndexPage = ({ data }) => {
  const receptek = data.allSanityRecept.nodes;
  const [searchTerm, setSearchTerm] = useState('');
  // const [filtered, setFiltered] = useState(receptek);
  const [filtered, setFiltered] = useState(
    receptek.map((recept) => {
      return {
        ...recept,
        nev: `<li>${recept.nev}</li>`,
      };
    })
  );

  function handleSearch(ev) {
    const { value } = ev.target;
    ev.preventDefault();
    let pattern = new RegExp(searchTerm, 'gi');
    const filteredSearch = receptek.filter(({ nev }) =>
      nev.toLowerCase().includes(value.toLowerCase())
    );

    const highlighted =
      searchTerm === ''
        ? filteredSearch.map((recept) => {
            return {
              ...recept,
              nev: `<li>${recept.nev}</li>`,
            };
          })
        : filteredSearch.map((recept) => {
            let matchedNev = recept.nev.replace(
              pattern,
              (match) => `<mark>${match}</mark>`
            );
            return {
              ...recept,
              nev: `<li>${matchedNev}</li>`,
            };
          });
    setFiltered(() => {
      return highlighted;
    });
  }

  return (
    <ContainerStyles>
      <h1 style={{ textAlign: 'center' }}>Dórika receptjei 🍽</h1>
      <p style={{ textAlign: 'center', marginTop: 0, fontSize: 18 }}>
        {filtered.length} recept
      </p>
      <SearchWrapper>
        <SearchInput
          placeholder='keresés...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={handleSearch}
        />
        <SearchIconImage src={SearchIcon} alt='search icon' />
      </SearchWrapper>
      <ReceptList>
        {filtered.map(({ _id, nev, slug, kep }) => (
          <Link key={_id} to={`/recept/${slug.current}`}>
            <RecipeTitleWrapper>
              <Img {...kep} alt={nev} />
              <div dangerouslySetInnerHTML={{ __html: nev }} />
            </RecipeTitleWrapper>
          </Link>
        ))}
      </ReceptList>
    </ContainerStyles>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allSanityRecept(sort: { fields: nev, order: ASC }) {
      nodes {
        _id
        nev
        slug {
          current
        }
        kep {
          ...ImageWithPreview
        }
      }
    }
  }
`;
