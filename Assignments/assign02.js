const EventEmitter = require("events");

const student = new EventEmitter();

// 1. Login event
student.on("login", () => {
    console.log("Student logged Successfully");
});

// 2. Assignment event
student.on("assign", () => {
    console.log("Assignment Submitted");
});

// 3. Logout event
student.on("logout", () => {
    console.log("Student logged Out");
});

// 4. Exit event
student.on("exit", () => {
    console.log("Exiting application.");
});

// Trigger events
student.emit("login");
student.emit("assign");
student.emit("logout");
student.emit("exit");