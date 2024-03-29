/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAnimePage
// ====================================================

export interface GetAnimePage_Page_media_title {
  __typename: "MediaTitle";
  /**
   * The official english title
   */
  english: string | null;
}

export interface GetAnimePage_Page_media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at medium size
   */
  large: string | null;
}

export interface GetAnimePage_Page_media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The official titles of the media in various languages
   */
  title: GetAnimePage_Page_media_title | null;
  /**
   * The cover images of the media
   */
  coverImage: GetAnimePage_Page_media_coverImage | null;
  // episodes: GetAnimePage_Page_media_episodes | null;
}

export interface GetAnimePage_Page {
  __typename: "Page";
  media: (GetAnimePage_Page_media | null)[] | null;
}

export interface GetAnimePage {
  Page: GetAnimePage_Page | null;
}

export interface GetAnimePageVariables {
  page: number;
  perPage: number;
}
