"use strict";
const patients = [
    { name: "ნინო", weight: 52, height: 1.60 },
    { name: "გიორგი", weight: 75, height: 1.75 },
    { name: "ანა", weight: 90, height: 1.68 },
    { name: "ლევანი", weight: 60, height: 1.80 }
];
const container = document.getElementById("patients");
for (let i = 0; i < patients.length; i++) {
    let bmi = patients[i].weight / (patients[i].height * patients[i].height);
    let status = "";
    if (bmi < 18.5) {
        status = "ნორმაზე დაბალი";
    }
    else if (bmi < 25) {
        status = "ნორმალური";
    }
    else if (bmi < 30) {
        status = "ჭარბი წონა";
    }
    else {
        status = "სიმსუქნე";
    }
    container.innerHTML += `
        <h3>${patients[i].name}</h3>
        <p>წონა: ${patients[i].weight} კგ</p>
        <p>სიმაღლე: ${patients[i].height} მ</p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>სტატუსი: ${status}</p>
        <hr>
    `;
}
