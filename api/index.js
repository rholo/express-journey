"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const profile_1 = __importDefault(require("./models/profile"));
app.listen(port, () => {
    // console.log('running server');
});
app.get('/', (request, response) => {
    try {
        response.status(200).json({
            description: 'welcome to my node API portfolio',
            version: '0.0.4',
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
exports.default = app;
//# sourceMappingURL=index.js.map