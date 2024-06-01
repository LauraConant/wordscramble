const array = Array.from({ length: 9 }, (_, i) => i + 1);

function centralCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinusSqrtLengthPlus1: num - (sqrtLength + 1),
        numMinusSqrtLength: num - sqrtLength,
        numMinusSqrtLengthMinus1: num - (sqrtLength - 1),
        numMinus1: num - 1,
        numMinus1: num + 1,
        numPlusSqrtLengthPlus1: num + (sqrtLength - 1),
        numPlusSqrtLength: num + sqrtLength,
        numPlusSqrtLengthMinus1: num + (sqrtLength + 1),
    };

    return results;
}

function leftTopCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num + 1,
        numPlusSqrtLength: num + sqrtLength,
        numPlusSqrtLengthMinus1: num + (sqrtLength + 1),
    };

    return results;
}

function rightTopCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num - 1,
        numPlusSqrtLength: num + sqrtLength,
        numPlusSqrtLengthMinus1: num + (sqrtLength - 1),
    };

    return results;
}

function leftBottomCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num + 1,
        numPlusSqrtLength: num - sqrtLength,
        numPlusSqrtLengthMinus1: num - (sqrtLength - 1),
    };

    return results;
}

function rightBottomCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num - 1,
        numPlusSqrtLength: num - sqrtLength,
        numPlusSqrtLengthMinus1: num - (sqrtLength + 1),
    };

    return results;
}

const num = 9;

topLeft = array.length - (array.length - 1);
topRight = Math.sqrt(array.length);
bottomLeft = array.length - (Math.sqrt(array.length) -1);
bottomRight = array.length;

if (num === topLeft) {
    results = leftTopCell(num, array);
} 
else if (num === topRight){
    results = rightTopCell(num, array);
}
else if (num === bottomLeft){
    results = leftBottomCell(num, array);
}
else if (num === bottomRight){
    results = rightBottomCell(num, array);
}
else {
    results = centralCell(num, array);
}

console.log(results);

function createGrid(array) {
    const container = document.getElementById('grid-container');
    
    array.forEach((item, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = item;
        container.appendChild(gridItem);

        gridItem.addEventListener('click', function() {
            handleCellClick(index);
            gridItem.style.background = "red";
        });
    });
    
}

function handleCellClick(index) {
    const num = index;
    console.log(`Cell clicked: ${num}`);
}

createGrid(array);