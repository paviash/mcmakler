const React = require('react');
const reactCreateClass = require('create-react-class');
const AdvertisementAPI = require('../utils/AdvertisementAPI');
const Dashboard = require('./Dashboard.react');

AdvertisementAPI.get();
const MainComponent = reactCreateClass({
  render() {
    let page;
    function router(props) {
      const key = props.path;
      if (key === '/') {
        page = <Dashboard />;
      } else {
        page = <p> OOPS</p>;
      }
    }
    router(this.props);
    return (
      <div>
        <header onClick={this.onClickHome.bind(null, '/')}>
          <div className="header">McMakler</div>
        </header>
        {page}
      </div>
    );
  },
  onClickHome(e) {
    window.history.pushState(null, null, e);
    window.dispatchEvent(new window.PopStateEvent('popstate'));
  },
});

module.exports = MainComponent;
