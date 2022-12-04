// Wrap exports in module wrapper function
//(function (exports, require, module, __filename, __dirname) { // Node.js done this automatically

    const myInfo = {
        name: "Asad Ali",
        age: 22,
        description: "I am full stack a web developer. Currently I am working on node.js",
        skills: ["Web development", "Programmer", "Backend Developer", "Frontend Designer"],
        languages: ["JavaScript", "ReactJS", "NodeJS", "Java", "Python"],
        working: false,
        studying: true
    }
    console.log(exports, require, module, __filename, __dirname);
    module.exports = myInfo
//}
//)