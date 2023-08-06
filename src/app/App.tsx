import TestReactYandexMaps from '../components/TestReactYandexMaps.tsx';
import '../style/App.css'
import { apiKEY } from '../utils/const.ts';
import { marksCord } from '../utils/placemarks.ts';

const App = () => {

    return (
        <div className='map__container'>
                <h1 className='map__content'>Работа c react-yandex-maps</h1>
                <TestReactYandexMaps
                    center={[56.49661, 84.95804]}
                    apiKey={apiKEY}
                    placeMarkCords={marksCord}
                />
        </div>
    );
};

export default App;