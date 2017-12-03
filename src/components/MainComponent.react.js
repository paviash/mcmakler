const React = require('react');
const reactCreateClass = require('create-react-class');
const AdvertisementAPI = require('../utils/AdvertisementAPI');
const Dashboard = require('./Dashboard.react');

AdvertisementAPI.get();
const MainComponent = reactCreateClass({
  render() {
    return (
      <div>
        <header>
          <div className="header">McMakler</div>
        </header>
        <Dashboard />
      </div>
    );
  },
});

module.exports = MainComponent;
