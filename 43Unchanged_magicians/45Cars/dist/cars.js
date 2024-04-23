"use strict";
//Written by: wa.siddiqui.
// Roll No. : 00200937.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extras) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}
const answer = storeCarInfo('Toyota', 'Camry', { color: 'blue' }, { features: ['navigation', 'sunroof'] });
console.log(answer);
