export interface IPlaceMark {
    text: string
    cord: number[]
    img: string
}
export interface TestReactYandexMapsProps {
    apiKey: string
    placeMarkCords: IPlaceMark[]
    center: number[]
}