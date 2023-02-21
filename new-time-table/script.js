const container = document.querySelector(".container")
const sectionButtons = document.querySelector(".section");
const dayButtons = document.querySelector(".day");

const boxes = [];

const timings = ['8:25-9:20', '9:25-10:20', '10:35-11:30', '11:35-12:30', '12:35-1:30', '1:35-2:30', '2:35-3:30', '3:35-4:30', '4:35-5:30', '5:35-6:30'];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (let i=0;i<10;i++) {
    let cell = document.createElement("div");
}