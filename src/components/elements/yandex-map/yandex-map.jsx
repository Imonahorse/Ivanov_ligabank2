import React from 'react';
import {YMaps, Map, Placemark, ZoomControl, GeolocationControl} from 'react-yandex-maps';
import styles from './yandex-map.module.scss';
import icon from './location.svg';

const Default = {
  CENTER_LOCATION: [55.304138, 55.932631],
  ZOOM: 5,
  WIDTH: '100%',
  HEIGHT: '100%',
};
const DefaultMarker = {
  SIZE: [37, 42],
  OFFSET: [-19, -42],
};
const markers = [
  {
    city: 'Москва',
    location: [55.75222, 37.61556],
  },
  {
    city: 'Саратов',
    location: [51.54056, 46.00861],
  },
  {
    city: 'Казань',
    location: [55.796391, 49.108891],
  },
  {
    city: 'Омск',
    location: [54.967399, 73.351550],
  },
  {
    city: 'Тюмень',
    location: [57.152985, 65.541227],
  },
];
const ZoomControlOptions = {
  RIGHT: '20px',
  TOP: '150px',
  SIZE: 'small',
};
const GeolocationControlOptions = {
  RIGHT: '20px',
  TOP: '2400px',
};


function YandexMap() {
  return (
    <section className={styles.map}>
      <div className='container'>
        <h2 className={styles.title}>Отделения Лига Банка</h2>
        <div className={styles.location}>
          <YMaps>
            <Map
              width={Default.WIDTH}
              height={Default.HEIGHT}
              defaultState={{
                center: Default.CENTER_LOCATION,
                zoom: Default.ZOOM,
              }}
            >
              <ZoomControl options={{
                position: {
                  right: ZoomControlOptions.RIGHT,
                  top: ZoomControlOptions.TOP,
                },
                size: ZoomControlOptions.SIZE,
              }}
              />
              <GeolocationControl options={{
                position: {
                  right: GeolocationControlOptions.right,
                  top: GeolocationControlOptions.TOP,
                },
              }}
              />
              {
                markers.map((marker) => (
                  <Placemark
                    key={marker.city}
                    geometry={marker.location}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: icon,
                      iconImageSize: DefaultMarker.SIZE,
                      iconImageOffset: DefaultMarker.OFFSET,
                    }}
                  />
                ))
              }
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
}

export default YandexMap;
