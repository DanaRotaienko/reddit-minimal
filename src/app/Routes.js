const ROUTES = {
    comments: (id) => `/comments/${id}`,
    home: () => `/`,
    postById: (id) => `/posts/${id}`,
    subreddits: () => `/subreddits`,
};

export default ROUTES;