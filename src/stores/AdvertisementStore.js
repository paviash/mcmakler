const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const EventEmitter = require('events').EventEmitter;
const extend = require('extend');

let store = {};

function loadAdvertisementData(data) {
  store = data[0];
}

const AdvertisementStore = extend({}, EventEmitter.prototype, {
  getAdvertisement() {
    return store;
  },
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});
AppDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {
    case AppConstants.GET_ADVERTISEMENT:
      loadAdvertisementData(action.data);
      break;
    default:
      return true;
  }
  AdvertisementStore.emitChange();
  return true;
});

module.exports = AdvertisementStore;
