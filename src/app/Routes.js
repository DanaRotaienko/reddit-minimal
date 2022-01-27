const ROUTES = {
    comments: (id) => `/comments/${id}`,
    posts: () => `/posts`,
    postById: (id) => `/posts/${id}`,
    subreddits: () => `/subreddits`,
    searchBar: () => `/`
};

export default ROUTES;