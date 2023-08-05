import React, { FC, useEffect, useState } from 'react';
import { YMaps, Map, Placemark, RoutePanel } from '@pbe/react-yandex-maps';
import { apiKEY } from '../utils/const.ts';

const TestInputMap: FC = () => {
	const [address, setAddress] = useState('');
	const [cords, setCords] = useState<[number, number] | null>(null);

	useEffect(() => {
		try {
			if (address) {
				fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKEY}&geocode=${address}&format=json`)
					.then(res => res.json())
					.then(data => {
						const featureMember = data.response.GeoObjectCollection.featureMember;
						if (featureMember && featureMember.length > 0) {
							const coordinates = featureMember[0].GeoObject.Point.pos.split(' ');
							setCords([parseFloat(coordinates[1]), parseFloat(coordinates[0])]);
						}
					});
			}
		} catch (e) {
			console.log(e);
		}
	}, [address]);

	const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(event.target.value);
	};

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
					width={500}
					height={500}
					state={{
						center: cords || [55, 37],
						zoom: 6,
						controls: ['zoomControl', 'fullscreenControl'],
					}}
				>
					<p>Свой инпут</p>
					<input
						className='map__input'
						value={address}
						onChange={inputChange}
					/>
					<Placemark
						geometry={cords || [50, 37]}
						properties={{
							balloonContentBody:
								'ЙА МЕТКА',
						}}
					/>
					<RoutePanel options={{ float: 'right' }} />
				</Map>
			</YMaps>;
		</div>
	);
};

export default TestInputMap;
