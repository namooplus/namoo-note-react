import axios from "axios";

const github = axios.create();
github.defaults.baseURL = 'https://api.github.com/repos/namooplus/namoo-note-post/contents';
github.defaults.headers.common['Authorization'] = `token ${process.env.REACT_APP_GIT_TOKEN}`;
github.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';

export default github;