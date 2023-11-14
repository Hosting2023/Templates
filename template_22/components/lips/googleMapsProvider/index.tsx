import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useJsApiLoader } from '@react-google-maps/api';

import { GoogleId } from '@/components/googleInput/constants/GoogleId';
import { setIsLoading } from '@/store/slices/googleMap';

export interface GoogleMapsProviderProps {
  children: ReactNode;
  googleMapsApiKey: string;
  libraries: (
    | 'core'
    | 'maps'
    | 'places'
    | 'geocoding'
    | 'routes'
    | 'marker'
    | 'geometry'
    | 'elevation'
    | 'streetView'
    | 'journeySharing'
    | 'drawing'
    | 'visualization'
  )[];
}
export const GoogleMapsProvider = ({
  children,
  googleMapsApiKey,
  libraries,
}: GoogleMapsProviderProps) => {
  const { isLoaded } = useJsApiLoader({
    id: GoogleId.GoogleId,
    googleMapsApiKey,
    libraries: libraries,
    nonce: 'map',
    version: 'beta',
    mapIds: ['12bd7ffa3c4e9da'],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(isLoaded));
  }, [isLoaded]);

  if (!children) return null;

  return <>{children}</>;
};
