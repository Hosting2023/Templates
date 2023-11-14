import { getFormattedAddress } from './getFormattedAddress';

export const googleInputRequester = (
  house: string,
  searchResult: google.maps.places.Autocomplete | null,
) => {
  const emptyAddress = {
    address: '',
    country: '',
    city: '',
    street: '',
    houseNumber: parseInt(house, 2),
    latitude: 0,
    longitude: 0,
  };
  if (searchResult != null) {
    const place = searchResult.getPlace();
    if (place && place.address_components) {
      const { fullFormattedAddress, country, city, street } =
        getFormattedAddress(place.address_components);
      const latitude = place.geometry?.location?.lat();
      const longitude = place.geometry?.location?.lng();
      return {
        address: fullFormattedAddress,
        country,
        city,
        street,
        houseNumber: parseInt(house, 2) || Number(house),
        latitude: latitude || 0,
        longitude: longitude || 0,
      };
    }
    return emptyAddress;
  }
  return emptyAddress;
};
