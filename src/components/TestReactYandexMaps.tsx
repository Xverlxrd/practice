import { SearchControl, YMaps, Map, Placemark, RouteEditor, RoutePanel } from '@pbe/react-yandex-maps';
import { apiKEY } from '../utils/const.ts';

const TestReactYandexMaps = () => {
    return (
        <div>
            <YMaps
                query={{
                    apikey: apiKEY,
                    ns: 'use-load-option',
                    load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}
            >
                <Map
                    width={700}
                    height={500}
                    state={{
                        center: [55, 37],
                        zoom: 6,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                >
                    <Placemark
                        geometry={[55, 37]}
                        properties={{
                            balloonContentBody:
                                'ЙА МЕТКА',
                        }}
                    />
                    <SearchControl options={{float: 'left'}}/>
                    <RouteEditor />
                    <RoutePanel options={{float: 'right'}}/>
                </Map>
            </YMaps>
        </div>
    );
};

export default TestReactYandexMaps;