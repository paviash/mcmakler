const React = require('react');
const reactCreateClass = require('create-react-class');

const Advertisement = reactCreateClass({
  render() {
    let advertisement;
    let image;
    let imageText;
    let location;
    console.log(this.props.value);
    if (this.props.value.length !== 10) {
      advertisement = this.props.value;
      if (advertisement.advertisementAssets[0]) {
        image =
					advertisement.advertisementAssets[0].advertisementThumbnails
					  .inventory_m.url;
      } else {
        image =
					advertisement.advertisementAssets.advertisementThumbnails.inventory_m
					  .url;
      }
      if (advertisement.purpose === 0) {
        imageText = 'Mieten';
      } else if (advertisement.purpose === 1) {
        imageText = 'Kaufen';
      }

      if (advertisement.userWishes.visibleAddress === false) {
        location = (
          <p>
            {advertisement.realestateSummary.address.postalCode} Sinn/Fleisbach
          </p>
        );
      } else {
        location = (
          <div>
            {' '}
            <p>
              {advertisement.realestateSummary.address.street}&nbsp;
              {advertisement.realestateSummary.address.number},
              {advertisement.realestateSummary.address.postalCode}&nbsp;
              {advertisement.realestateSummary.address.city}
            </p>
          </div>
        );
      }
    }

    return (
      <div className="container">
        <div className="image-container">
          <img src={image} alt="ad" />
          <div className="image-text">{imageText}</div>
        </div>
        <div className="container-text">
          <p className="ad-title">{advertisement.title}</p>
          <p className="ad-sub-text">{location}</p>
          <p className="ad-price">
            {advertisement.advertisementPrice.sellPrice}€
          </p>
          <p className="ad-space">
            {advertisement.realestateSummary.numberOfRooms} Zimmer | ab{' '}
            {advertisement.realestateSummary.space} m2
          </p>
        </div>
      </div>
    );
  },
});

module.exports = Advertisement;