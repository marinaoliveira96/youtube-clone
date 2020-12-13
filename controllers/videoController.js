export const home = (req, res) => res.render('home', { pageTitle: 'Home' }); // está renderizando a home.pug

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  console.group(searchingBy);
  res.render('search', { pageTitle: 'Search', searchingBy });
};

export const videos = (req, res) =>
  res.render('videos', { pageTitle: 'Videos' });

export const upload = (req, res) => res.render('Upload');

export const videoDetail = (req, res) =>
  res.render('Video Detail', { pageTitle: 'Video Detail' });

export const editVideo = (req, res) =>
  res.render('Edit Video', { pageTitle: 'Edit Video' });

export const deleteVideo = (req, res) =>
  res.render('Delete Video', { pageTitle: 'Delete Video' });
