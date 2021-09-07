import { autocomplete, getAlgoliaResults, getAlgoliaFacets  } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import algoliasearch from 'algoliasearch';
import {h, Fragment} from 'preact';
import ProductItem from './components/ProductItem'

import '@algolia/autocomplete-theme-classic';

const appId = 'K6C68ZR6FA';
const apiKey = 'd76ff598c3dff31788b0ee20edcebfb9';
const searchClient = algoliasearch(appId, apiKey);

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'search_query_suggestions',
  getSearchParams() {
    return {
      hitsPerPage: 5,
    };
  },
});

autocomplete({
  container: '#autocomplete', //Define where your search box goes in the DOM
  placeholder: 'Search for products', //Define placeholder text
  openOnFocus: true, //If true, dropdown appears as soon as users focuses the input to display trending searches 
// debug: true, //If true, keeps the panel open when inspecting elements in your browser DevTools
  plugins: [querySuggestionsPlugin], //Add the Query Suggestions plugin
  getSources({ query, state }) { 
    if (!query) {
      return [];
    }

    return [
      {
        sourceId: 'products',        
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'search',
                query,
                params: {            
                  hitsPerPage: 3,                        
                  attributesToSnippet: ['name:10'],
                  snippetEllipsisText: '…',
                },
              },
            ],
          });
        },
        templates: {
          header() {
            return (
              <Fragment>
                <span className="aa-SourceHeaderTitle">Products</span>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            );
          },
          item({ item, components }) {
            return (
                <ProductItem
                    hit={item}
                    components={components}
              />
            );
          },
          noResults() {
            return 'No products for this query.';
          },
        },
      },
    ];
  }
});
  

const domSelector = document.querySelector('.autocomplete');
const searchbox = document.querySelector('#autocomplete input');

searchbox.addEventListener('click', () => {
    domSelector.style.display = 'block';
});

searchbox.addEventListener('blur', () => {
    domSelector.style.display = 'none';
});
