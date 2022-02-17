"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// run `node index.js` in the terminal
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const profile_1 = __importDefault(require("./models/profile"));
// const projects = require('./models/projects')
app.listen(port, () => {
    // console.log('running server');
});
app.get('/', (request, response) => {
    try {
        response.status(200).json({
            description: 'welcome to my node API portfolio',
            version: 1.0,
            path: 'API',
            availableRoutes: [
                '/api/portfolio'
            ]
        });
    }
    catch (error) {
        return response.status(500).send('Error server');
    }
});
app.get('/api/portfolio', (request, response) => {
    try {
        response.status(200).json(profile_1.default);
    }
    catch (error) {
        return response.status(500).send('Error server');
    }
});
// console.log(`Hello Node.js v${process.versions.node}!`);
//# sourceMappingURL=index.js.map