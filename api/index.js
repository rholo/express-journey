"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const profile_1 = __importDefault(require("./models/profile"));
const companies_1 = __importDefault(require("./models/companies"));
const socialNetworks_1 = require("./models/socialNetworks");
app.listen(port, () => {
    // console.log('running server'); 
});
app.get('/', (_request, response) => {
    try {
        response.status(200).json({
            description: 'welcome to my Node API portfolio',
            version: '0.0.4',
            path: 'api',
            availableRoutes: [
                '/api/portfolio',
                '/api/companies'
            ]
        });
    }
    catch (error) {
        return errorHandler(response, 500);
    }
});
app.get('/api/portfolio', (_request, response) => {
    try {
        response.status(200).json(Object.assign(Object.assign({}, profile_1.default), { socialNetworks: socialNetworks_1.socialNetworks }));
    }
    catch (error) {
        return errorHandler(response, 500);
    }
});
app.get('/api/companies', (_request, response) => {
    try {
        response.status(200).json(companies_1.default);
    }
    catch (error) {
        return errorHandler(response, 500);
    }
});
app.get('/api/company/:id', (request, response) => {
    const company = companies_1.default.find(company => company.hash === request.params.id);
    try {
        if (!company) {
            errorHandler(response, 204);
        }
        response.status(200).json(company);
    }
    catch (error) {
        return errorHandler(response, 500);
    }
});
const errorHandler = (response, error) => {
    switch (error) {
        case 500:
            return response.status(error).send('Error server');
        case 204:
            return response.status(error).send('Not exist');
        default:
            return 'try to resolve this error soon!';
    }
};
exports.default = app;
//# sourceMappingURL=index.js.map