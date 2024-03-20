"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: 'postgres',
    database: 'labtask02',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgre',
    entities: [user_entity_1.UserEntity],
    synchronize: false,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map