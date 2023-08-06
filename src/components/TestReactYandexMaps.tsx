import { SearchControl, YMaps, Map, Placemark, RouteEditor, RoutePanel, Polyline } from '@pbe/react-yandex-maps';
import { lineCord } from '../utils/line.ts';
import { FC } from 'react';
import { TestReactYandexMapsProps } from './TestReactYandexMaps.props.ts';


const TestReactYandexMaps:FC<TestReactYandexMapsProps> = ({center, placeMarkCords, apiKey}) => {

    return (
        <div>
            <YMaps
                query={{
                    apikey: apiKey,
                    ns: 'use-load-option',
                    load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}
            >
                <Map
                    width={700}
                    height={600}
                    state={{
                        center: center,
                        zoom: 6,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                >
                    {placeMarkCords.map(mark => (
                        <Placemark
                            key={mark.text}
                            geometry={mark.cord}
                            properties={{
                                balloonContentBody: `Это ${mark.text} и его координаты: ${mark.cord}`,
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: mark.img,
                                iconImageSize: [32, 32],
                                iconImageOffset: [-16, -32],
                            }}
                        />
                    ))}
                    <Polyline
                        geometry={lineCord}
                        options={{
                            strokeColor: '#0000FF',
                            strokeWidth: 4,
                        }}
                    />
                    <SearchControl options={{float: 'left'}}/>
                    <RouteEditor/>
                    <RoutePanel options={{float: 'right'}}/>
                </Map>
            </YMaps>
        </div>
    );
};

export default TestReactYandexMaps;