const pics = () => '/pics';
pics.detail = (id = ':picId') => `/pics/${id}`;

export default {
  pics,
};
