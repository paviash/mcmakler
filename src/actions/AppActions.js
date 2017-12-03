const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

module.exports = {
  getAdvertisements(Info) {
    AppDispatcher.handleAction({
      actionType: AppConstants.GET_ADVERTISEMENT,
      data: Info,
    });
  },
};
