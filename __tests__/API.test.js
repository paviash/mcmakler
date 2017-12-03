/* eslint-env jest */

const AdvertisementStore = require('../src/stores/AdvertisementStore');
const AdvertisementAPI = require('../src/utils/AdvertisementAPI');

AdvertisementAPI.get();

function getAdvertiserInfo() {
  return AdvertisementStore.getHash();
}
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
let response;
describe('get() using Promises', () => {
  it('should check response', () => {
    sleep(5000).then(() => {
      response = getAdvertiserInfo();
      return expect(response.length).toBeGreaterThan(0);
    });
  });
});
