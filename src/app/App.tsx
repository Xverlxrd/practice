import TestReactYandexMaps from "../components/TestReactYandexMaps.tsx";
import '../style/App.css'

const App = () => {

    return (
        <div className='map__container'>
                <h1 className='map__content'>Работа c react-yandex-maps</h1>
                <TestReactYandexMaps/>
        </div>
    );
};

export default App;