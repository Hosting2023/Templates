export const getFormattedAddress = (
  address: google.maps.GeocoderAddressComponent[],
) => {
  const houseNumber = parseFloat(
    address.find((comp) => comp.types.includes('street_number'))?.long_name ??
      '',
  );
  const country =
    address.find((comp) => comp.types.includes('country'))?.long_name ?? '';
  const street =
    address.find((comp) => comp.types.includes('route'))?.short_name ?? '';
  const city =
    address.find((comp) => comp.types.includes('locality'))?.long_name ?? '';
  const FormattedAddress = `${street ? `${street},` : ''} ${
    city ? `${city},` : ''
  } ${country || ''}`;

  const fullFormattedAddress = `${street ? `${street},` : ''} ${
    houseNumber ? `${houseNumber},` : ''
  } ${city ? `${city},` : ''} ${country || ''}`;

  return {
    fullFormattedAddress,
    FormattedAddress,
    country,
    city,
    street,
    houseNumber,
  };
};
