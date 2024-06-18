import { storyPage } from '../components/storyPage.js';

const loadDetail = (content) => {
    document.getElementById('content-history-detail').innerHTML = storyPage(content);
};

export default loadDetail;
