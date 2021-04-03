export const state = () => ({
  pageId: ""
});

export const actions = {
  // getPage({ commit, pageId }) {
  //   commit("setPage", pageId);
  // }
};

export const mutations = {
  setPage(state, pageId) {
    state.pageId = pageId;
  }
};

export const getters = {
  RETURN_PAGE_ID: state => state.pageId
};
