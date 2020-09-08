const pics = () => '/pics';
pics.detail = (id = ':picsId') => `/pics/${id}`;

export default {
  pics,
}
