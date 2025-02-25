console.log("false == '0': ", false == '0');

console.log("null == undefined: ", null == undefined);

console.log('" \t\r\n" == 0: ', " \t\r\n" == 0);

console.log("' ' == 0: ", ' ' == 0);

document.addEventListener('DOMContentLoaded', () => {
    const compareButton = document.getElementById('compareButton');
    const resultDiv = document.getElementById('result');

    compareButton.addEventListener('click', () => {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        const type1 = document.getElementById('type1').value;
        const type2 = document.getElementById('type2').value;

        const convertedValue1 = convertType(value1, type1);
        const convertedValue2 = convertType(value2, type2);

        const equalTo = (convertedValue1 == convertedValue2);
        const identicalTo = (convertedValue1 === convertedValue2);

        console.log(`${convertedValue1} Equal to (==) ${convertedValue2}: ${equalTo}`);
        console.log(`${convertedValue1} Identical to (===) ${convertedValue2}: ${identicalTo}`);

        resultDiv.innerHTML = `
            <p>Equal to (==): ${equalTo}</p>
            <p>Identical to (===): ${identicalTo}</p>
        `;
    });

    function convertType(value, type) {
        switch (type) {
            case 'string':
                return String(value);
            case 'number':
                return Number(value);
            case 'boolean':
                return value.toLowerCase() === 'true';
            default:
                return value;
        }
    }
});
