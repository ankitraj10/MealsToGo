import { mocks } from "./mock";
import camelize from "camelize";
import { mockImages } from "./mock"

export const restaurantsRequest = (location) => {

    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((imageItem) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })

        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            address: restaurant.vicinity
        };
    });

    return camelize(mappedResults);
};