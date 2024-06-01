let cellsAmount = document.getElementById("cellsAmount").value;
const button = document.querySelector("#enter");

button.addEventListener("click", changeValue);

const array = Array.from({ length: cellsAmount }, (_, i) => i + 1);
document.documentElement.style.setProperty('--cellsAmount', Math.sqrt(cellsAmount));

function createGrid(array) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    array.forEach((item, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = item;
        container.appendChild(gridItem);

        gridItem.addEventListener('click', function () {

            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.background = '#f7f7f7';
            });

            handleCellClick(index, array);
            gridItem.style.background = "rgb(239, 194, 255)";
        });
    });

}

createGrid(array);

function changeValue() {
    const cellsAmount = document.getElementById("cellsAmount").value;

    console.log(cellsAmount);

    const array = Array.from({ length: cellsAmount }, (_, i) => i + 1);
    document.documentElement.style.setProperty('--cellsAmount', Math.sqrt(cellsAmount));

    createGrid(array);
}

function centralCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num - 1,
        numPlus1: num + 1,
        numMinusSqrtLengthPlus1: num - (sqrtLength + 1),
        numMinusSqrtLength: num - sqrtLength,
        numMinusSqrtLengthMinus1: num - (sqrtLength - 1),
        numPlusSqrtLengthPlus1: num + (sqrtLength - 1),
        numPlusSqrtLength: num + sqrtLength,
        numPlusSqrtLengthMinus1: num + (sqrtLength + 1),
    };

    return results;
}

function leftTopCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);
    console.log(length);

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

function topCenterCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num - 1,
        numPlus1: num + 1,
        numPlusSqrtLength: num + sqrtLength,
        numPlusSqrtLengthPlus1: num + (sqrtLength + 1),
        numPlusSqrtLengthMinus1: num + (sqrtLength - 1),
    };

    return results;
}

function bottomCenterCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num - 1,
        numPlus1: num + 1,
        numPlusSqrtLength: num - sqrtLength,
        numMinusSqrtLengthPlus1: num - (sqrtLength + 1),
        numMinusSqrtLengthMinus1: num - (sqrtLength - 1),
    };

    return results;
}

function leftCenterCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numPlus1: num + 1,
        numPlusSqrtLength: num + sqrtLength,
        numMinusSqrtLength: num - sqrtLength,
        numPlusSqrtLengthPlus1: num + (sqrtLength + 1),
        numMinusSqrtLengthMinus1: num - (sqrtLength - 1),
    };

    return results;
}

function rightCenterCell(num, array) {
    const length = array.length;
    const sqrtLength = Math.sqrt(length);

    const results = {
        numMinus1: num - 1,
        numPlusSqrtLength: num + sqrtLength,
        numMinusSqrtLength: num - sqrtLength,
        numMinusSqrtLengthPlus1: num - (sqrtLength + 1),
        numPlusSqrtLengthMinus1: num + (sqrtLength - 1),
    };
    return results;
}

function handleCellClick(index, array) {
    let num = index + 1;
    let path = [];
    path.push(num);
    console.log("cellClick", array.length);

    // console.log(`Cell clicked: ${num}`);

    for (let i = 0; i < 5; i++) {
        topLeft = 1;
        topRight = Math.sqrt(array.length);
        bottomLeft = array.length - (Math.sqrt(array.length) - 1);
        bottomRight = array.length;

        topCenter = num > 1 && num < Math.sqrt(array.length);
        bottomCenter = num > array.length - Math.sqrt(array.length) && num < array.length;
        rightCenter = num % Math.sqrt(array.length) === 0 && num !== array.length && num !== Math.sqrt(array.length);

        let found = false;
        for (let i = 0; i < array.length; i += Math.sqrt(array.length)) {
            if (array[i] === num) {
                found = true;
                break;
            }
        }

        leftCenter = found && num != 1 && num != bottomLeft;

        let results;
        if (num === topLeft) {
            results = leftTopCell(num, array);
        } else if (num === topRight) {
            results = rightTopCell(num, array);
        } else if (num === bottomLeft) {
            results = leftBottomCell(num, array);
        } else if (num === bottomRight) {
            results = rightBottomCell(num, array);
        } else if (bottomCenter) {
            results = bottomCenterCell(num, array);
        } else if (topCenter) {
            results = topCenterCell(num, array);
        } else if (rightCenter) {
            results = rightCenterCell(num, array);
        } else if (leftCenter) {
            results = leftCenterCell(num, array);
        } else {
            results = centralCell(num, array);
        }

        const neighborIndexes = Object.values(results);
        let randomIndex = neighborIndexes[Math.floor(Math.random() * neighborIndexes.length)];

        do {
            randomIndex = neighborIndexes[Math.floor(Math.random() * neighborIndexes.length)];
        } while (path.includes(randomIndex));

        const neighborCell = document.querySelector(`#grid-container .grid-item:nth-child(${randomIndex})`);
        neighborCell.style.background = "#89CFF0";
        num = randomIndex;
        path.push(num);
    }

    console.log(path);
    const p = document.getElementById("length");
    p.innerText = `Path: ${path}`;
}