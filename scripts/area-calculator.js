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
}