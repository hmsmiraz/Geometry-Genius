// Reuseable function to parse value to float
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable function for set inner text
function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to entry function
function addToEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> 
    <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}
// validation
// function checkNan(fieldOne, fieldTwo){
//     if(isNaN(fieldOne) || isNaN(fieldTwo)){
//         alert('Please provide a number');     
//     }
//     return; 
// }
function calculateTriangleArea(){
    // get base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(base,height);

    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = triangleArea;
}
function calculateRectangleArea(){
    // get width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get height value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(width,length);

    const rectangleArea = width * length;
    console.log(rectangleArea);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = rectangleArea;
}
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please provide a number');
        return;      
    };
    const parallelogramArea = base * height;
    setInnerText('parallelogram-area',parallelogramArea);
    addToEntry('Parallelogram', parallelogramArea);
}

