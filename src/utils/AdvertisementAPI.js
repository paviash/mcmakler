const AppActions = require('../actions/AppActions');
const request = require('superagent');

module.exports = {
  get() {
    request
      .get('https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements') // To bypass CORS, not an ideal solution
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (response.status === 200) {
          const advertisementListed = response.body.data
            .sort((a, b) => (a.Variable1 < b.Variable1 ? 1 : -1))
            .slice(0, 10);
          AppActions.getAdvertisements([advertisementListed]);
        } else {
          AppActions.getAdvertisements(['Error']);
        }
      });
  },
};
