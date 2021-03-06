import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    playlists: null,
    playing: false,
    item: null,
    userplaylist: null,
    recentlyPlayed: null,
    newReleases: null,
    topList: null,
    workout: null,
    mood: null,
    party: null,
    playlistid: null,
    recommended: null,
    detailAlbum: null,
    detailAlbumTracks: null,
    category: null,
    categoryDetail: null,
  },

  reducers: {
    set_user: (state, action) => {
      state.user = action.payload;
    },
    set_token: (state, action) => {
      state.token = action.payload;
    },
    set_playlists: (state, action) => {
      state.playlists = action.payload;
    },
    set_list: (state, action) => {
      state.userplaylist = action.payload;
    },
    set_recentlyPlayed: (state, action) => {
      state.recentlyPlayed = action.payload;
    },
    set_newReleases: (state, action) => {
      state.newReleases = action.payload;
    },
    set_topList: (state, action) => {
      state.topList = action.payload;
    },
    set_workout: (state, action) => {
      state.workout = action.payload;
    },
    set_mood: (state, action) => {
      state.mood = action.payload;
    },
    set_party: (state, action) => {
      state.party = action.payload;
    },
    set_playlistid: (state, action) => {
      state.playlistid = action.payload;
    },
    set_Recommended: (state, action) => {
      state.recommended = action.payload;
    },

    set_DetailAlbum: (state, action) => {
      state.detailAlbum = action.payload;
    },
    set_DetailAlbumTracks: (state, action) => {
      state.detailAlbumTracks = action.payload;
    },
    set_categories: (state, action) => {
      state.category = action.payload;
    },
    set_categoriesDetail: (state, action) => {
      state.categoryDetail = action.payload;
    },
  },
});

export const {
  set_user,
  set_token,
  set_playlists,
  set_list,
  set_recentlyPlayed,
  set_newReleases,
  set_topList,
  set_workout,
  set_mood,
  set_party,
  set_playlistid,
  set_Recommended,
  set_DetailAlbum,
  set_DetailAlbumTracks,
  set_categories,
  set_categoriesDetail,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectToken = (state) => state.user.token;
export const selectPlaylists = (state) => state.user.playlists;
export const selectList = (state) => state.user.userplaylist;
export const selectRecentlyPlayed = (state) => state.user.recentlyPlayed;
export const selectNewReleases = (state) => state.user.newReleases;
export const selectTopList = (state) => state.user.topList;
export const selectWorkout = (state) => state.user.workout;
export const selectMood = (state) => state.user.mood;
export const selectParty = (state) => state.user.party;
export const selectPlaylistid = (state) => state.user.playlistid;
export const selectRecommended = (state) => state.user.recommended;
export const selectDetailAlbum = (state) => state.user.detailAlbum;
export const selectDetailAlbumTracks = (state) => state.user.detailAlbumTracks;
export const selectCategories = (state) => state.user.category;
export const selectCategoriesDetail = (state) => state.user.categoryDetail;

export default userSlice.reducer;
