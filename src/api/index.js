import axios from 'axios';

const removeKind = (res) => res.map(({ data }) => data);

export default class Api {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://www.reddit.com/',
    });
  }

  async fetchAll(path) {
    const { data: { data: { children } } } = await this.client.get(path);
    return removeKind(children);
  }

  async fetchOne(path) {
    const {
      data: [pic, comments],
    } = await this.client.get(path);

    return [
      removeKind(pic.data.children)[0],
      removeKind(comments.data.children),
    ];
  }
}
