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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const class_validator_1 = require("class-validator");
class UserDTO {
}
exports.UserDTO = UserDTO;
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], UserDTO.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UserDTO.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UserDTO.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UserDTO.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_1.MinLength)(11),
    __metadata("design:type", String)
], UserDTO.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], UserDTO.prototype, "cpassword", void 0);
//# sourceMappingURL=user.dto.js.map