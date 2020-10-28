const axios = require('axios');
const BASEPATH = 'https://marvelapiwrapper.herokuapp.com';

exports.find = async () => {
  const path = `${BASEPATH}/characters`;

  const { data } = await axios(path);
  data.map(e => e.thumbnail = this.getThumbnailLink(e.thumbnail));
  return data;
};

exports.findById = async id => {
  const path = `${BASEPATH}/characters/${id}`;

  const { data: [data] } = await axios(path);
  data.thumbnail = this.getThumbnailLink(data.thumbnail);
  return data;
}

exports.search = async name => {
  const path = `${BASEPATH}/characters/search/${name}`;
  const { data } = await axios(path);
  data.map(e => e.thumbnail = this.getThumbnailLink(e.thumbnail));
  return data;
}

exports.getThumbnailLink = thumbnail => thumbnail && `${thumbnail.path}.${thumbnail.extension}`;