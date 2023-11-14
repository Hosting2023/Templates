import React, { FC, useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import cn from 'classnames';
import { StyleLabelAlign } from 'constants/styleLabels';
import { Field, FieldProps } from 'formik';
import Image from 'next/image';

import house from '@/assets/icons/house.svg';
import location from '@/assets/icons/locationFilled.svg';
import { Card, Text } from '@/components/lips';

import CustomInput from '../lips/customInput';

import { getFormattedAddress } from './helpers/getFormattedAddress';

import styles from './styles.module.scss';

interface IGoogleInputProps {
  currentAddress: string;
  currentHouse: string;
  addressFieldName: string;
  houseFieldName: string;
  onChangeAddress: (value: string) => void;
  onChangeHouse: (value: string) => void;
  setResult: (val: google.maps.places.Autocomplete | null) => void;
  addressError?: string;
  houseError?: string;
}

const GoogleInput: FC<IGoogleInputProps> = ({
  currentAddress,
  currentHouse,
  addressFieldName,
  houseFieldName,
  onChangeAddress,
  onChangeHouse,
  setResult,
  addressError,
  houseError,
}) => {
  const [searchResult, setSearchResult] =
    useState<google.maps.places.Autocomplete | null>(null);

  const onPlaceChanged = () => {
    if (searchResult != null) {
      const place = searchResult.getPlace();

      if (place.address_components) {
        const { FormattedAddress, houseNumber } = getFormattedAddress(
          place.address_components,
        );

        onChangeAddress(FormattedAddress);

        onChangeHouse(houseNumber ? houseNumber.toString() : '');
      }
    }
  };

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setSearchResult(autocomplete);
    setResult(autocomplete);
  };

  return (
    <div className={styles.section}>
      <Text
        weight="bold"
        size="base"
        align="left"
        className={styles.text}
      >
        Address
      </Text>
      <Card className={styles.addressInputWrapper}>
        <div className={styles.inputWithIcon}>
          <Image
            src={location as unknown as string}
            alt="location"
          />

          <Field name={addressFieldName}>
            {({
              field,
              meta,
            }: FieldProps<{
              address: string;
            }>) => (
              <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
              >
                <CustomInput
                  variant="default"
                  label="Address"
                  name={addressFieldName}
                  className={styles.input}
                  id="address"
                  value={currentAddress}
                  onBlur={field.onBlur}
                  touched={meta.touched}
                  error={meta.error}
                  onChange={field.onChange}
                  noBorderBottom
                />
              </Autocomplete>
            )}
          </Field>
        </div>
        <div className={cn(styles.inputWithIcon, styles.inputWithIconHome)}>
          <Image
            src={house as unknown as string}
            alt="house"
          />
          <Field name={houseFieldName}>
            {({
              field,
              meta,
            }: FieldProps<{
              house: string;
            }>) => (
              <CustomInput
                variant="default"
                label="House"
                name={houseFieldName}
                className={styles.input}
                id="houseNumber"
                value={currentHouse}
                onBlur={field.onBlur}
                touched={meta.touched}
                onChange={field.onChange}
                noBorderBottom
              />
            )}
          </Field>
        </div>
      </Card>
      {(addressError || houseError) && (
        <Card className={cn(styles.cardContainer, styles.labelError)}>
          <Text
            align={StyleLabelAlign.Center}
            className={styles.label}
          >
            {`${addressError || ''} ${houseError || ''}`}
          </Text>
        </Card>
      )}
    </div>
  );
};

export default GoogleInput;
