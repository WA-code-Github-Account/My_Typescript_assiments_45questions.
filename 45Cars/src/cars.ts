//Written by: wa.siddiqui.
// Roll No. : 00200937.

function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

const answer = storeCarInfo('Toyota', 'Camry', {color: 'blue'}, {features: ['navigation', 'sunroof']});
console.log(answer);