import React from 'react';

import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

import {
  InstantSearch,
  Hits,
  InfiniteHits,
  SearchBox,
  Pagination,
  Highlight,
  CurrentRefinements,
  connectCurrentRefinements,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';

import NavBar from "./navBar"
import { Container } from 'react-bootstrap';
import { MeiliDbl } from "./Meili"


function Dbl() {

  const searchClient = MeiliDbl();

  const CurrentRefinements = () => {
    return <div></div>
  };
  
  //const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

  return (
    <>
      <div className="ais-InstantSearch">
        <InstantSearch indexName="dbl" searchClient={searchClient}>
          <Container>
            <main>
              <NavBar />
              <div className="flex-box">
              <div className="left-panel">
                <CurrentRefinements
                  clearsQuery={false}
                />
                <ClearRefinements />
                <h2>Ämne</h2>
                <RefinementList
                  attribute="categories"
                  limit={10}
                  showMoreLimit={30}
                  showMore />

                <h2>Typ av innehåll</h2>
                <RefinementList
                  attribute="types"
                  limit={10}
                  showMoreLimit={30}
                  showMore />

                <h2>Publicerad av</h2>
                <RefinementList
                  attribute="publisher"
                  limit={10}
                  showMoreLimit={30}
                  showMore />

                <h2>A-Ö</h2>
                <RefinementList
                  attribute="startletter"
                  limit={10}
                  showMoreLimit={30}
                  showMore />
                <h2>Tillgång</h2>
                <RefinementList
                  attribute="access"
                  limit={10}
                  showMoreLimit={30}
                  showMore />
                <Configure hitsPerPage={10} />
              </div>
              <div className="right-panel">
                <SearchBox />
                <Pagination />
                <Hits hitComponent={Hit} />
                <Pagination />
              </div>
          </div>

            </main>
          </Container>
        </InstantSearch>
      </div>
    </>
  );
  function Hit(props) {
    let types = ""
    if (typeof props.hit.types != "undefined") {
      if (Array.isArray(props.hit.types) && props.hit.types.length > 0) {
        for (let index = 0; index < props.hit.types.length; index++) {
          if (index === 0) {
            types += props.hit.types[index];
          } else {
            types += ', ' + props.hit.types[index];
          }
        }
      } else {
        types = props.hit.types;
      }
    }
    let categories = ""
    if (typeof props.hit.categories != "undefined") {
      if (Array.isArray(props.hit.categories) && props.hit.categories.length > 0) {
        for (let index = 0; index < props.hit.categories.length; index++) {
          if (index === 0) {
            categories += props.hit.categories[index];
          } else {
            categories += ', ' + props.hit.categories[index];
          }
        }
      } else {
        categories = props.hit.categories;
      }
    }
    return (
      <div>
        <div className="hit-Fnamn field">
          <div>Name</div>
          <div>{props.hit.name}</div>
        </div>
        <div className="hit-Enamn field">
          <div>Description:</div>
          <div><Highlight attribute="description" hit={props.hit} /></div>
        </div>
        <div className="hit-KTH_id field">
          <div>Link:</div>
          <div><a href={props.hit.link}>{props.hit.link}</a></div>
        </div>
        <div className="hit-Orgnamn field">
          <div>Publisher:</div>
          <div>{props.hit.publisher}</div>
        </div>
        <div className="hit-Bef_ben field">
          <div>Types:</div>
          <div>{types}</div>
        </div>
        <div className="hit-Anst_nuv_bef field">
          <div>Categories:</div>
          <div>{categories}</div>
        </div>
        <div className="hit-Anst_nuv_bef field">
          <div>Tillgänglig för:</div>
          <div>{props.hit.access}</div>
        </div>
      </div>
    );
  }
}

export default Dbl;