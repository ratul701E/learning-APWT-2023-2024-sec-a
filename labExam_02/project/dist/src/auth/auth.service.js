"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const signin_dto_1 = require("./dto/signin.dto");
const crypto_1 = require("crypto");
let AuthService = class AuthService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async registration(userDto) {
        if (userDto.cpassword != userDto.password)
            return "Password and confirm password not matched.";
        const res = await this.userRepo.findOne({
            where: {
                email: userDto.email
            }
        });
        if (res != null)
            return "User with this email is already exist";
        const newUser = new user_entity_1.UserEntity();
        newUser.fullname = userDto.fullname;
        newUser.email = userDto.email;
        newUser.city = userDto.city;
        newUser.company = userDto.company;
        newUser.country = userDto.country;
        newUser.phone = userDto.phone;
        newUser.role = user_entity_1.Role.CUSTOMER;
        newUser.salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(userDto.password, newUser.salt);
        this.userRepo.save(newUser);
    }
    async signin(signinDto, res) {
        const { email, password } = signinDto;
        const user = await this.userRepo.findOneBy({
            email,
        });
        if (user && await user.checkPassword(password)) {
            res.cookie('auth', (0, crypto_1.randomUUID)(), {
                maxAge: 99999999999
            });
            return {
                status: "Sign in successfull",
                role: user_entity_1.Role[user.role]
            };
        }
        else {
            return "Invalid credentials";
        }
    }
};
exports.AuthService = AuthService;
__decorate([
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "signin", null);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map