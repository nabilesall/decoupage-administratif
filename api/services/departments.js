"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const jsonfile_1 = __importDefault(require("jsonfile"));
var DepartmentsService;
(function (DepartmentsService) {
    function getDepartments() {
        return jsonfile_1.default.readFile("./data/departments.json");
    }
    DepartmentsService.getDepartments = getDepartments;
    function getDepartmentByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const departments = yield getDepartments();
            console.log(name);
            const department = departments.find((department) => department.name.toLowerCase() === name.toLowerCase());
            if (department) {
                return department;
            }
        });
    }
    DepartmentsService.getDepartmentByName = getDepartmentByName;
})(DepartmentsService = exports.DepartmentsService || (exports.DepartmentsService = {}));
