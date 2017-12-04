const React = require('react');
const reactCreateClass = require('create-react-class');
const AdvertisementStore = require('../stores/AdvertisementStore');
const Advertisement = require('./Advertisement.react');
const Loading = require('react-loading-animation');

function getAdvertisements() {
  return {
    advertisements: AdvertisementStore.getAdvertisement(),
  };
}
const Dashboard = reactCreateClass({
  getInitialState() {
    return getAdvertisements();
  },
  componentDidMount() {
    AdvertisementStore.addChangeListener(this.onChange);
  },
  componentWillUnmount() {
    AdvertisementStore.removeChangeListener(this.onChange);
  },
  render() {
    const adData = this.state.advertisements.advertisements;
    let advertisementListing;
    if (adData) {
      advertisementListing = Object.keys(adData).map(obj => (
        <Advertisement value={adData[obj]} />
      ));
    } else {
      advertisementListing = <Loading />;
    }
    return <div className="page-layout">{advertisementListing}</div>;
  },
  onChange() {
    this.setState({ advertisements: getAdvertisements() });
  },
});

module.exports = Dashboard;
