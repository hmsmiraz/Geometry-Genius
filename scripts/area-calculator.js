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
    // get base value
    const baseField = document.getElementById('parallelogram-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get height value
    const heightField = document.getElementById('parallelogram-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(base,height);

    const parallelogramArea = base * height;
    console.log(parallelogramArea);

    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = parallelogramArea;
}