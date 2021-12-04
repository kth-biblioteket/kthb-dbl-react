import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

export function MeiliDbl() {
    return instantMeiliSearch(
      "https://ref.lib.kth.se/meilidbl",
      "",
      {
        paginationTotalHits: 200,
        primaryKey: 'id',
      }
    );
}