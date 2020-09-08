import axios from 'axios';

export default class Api {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://www.reddit.com/',
    })
  }

  async fetchAll(path) {
    const response = await this.client.get(path);
    return response.data.data.children;
  }

  async fetchOne(path) {
    const {
      data: [pic, comments]
    } = await this.client.get(path);

    return [
      pic.data.children[0].data,
      comments.data.children.map(({ data }) => data)
    ];
  }
}
