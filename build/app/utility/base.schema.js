"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSchema = void 0;
const mongoose_1 = require("mongoose");
class BaseSchema extends mongoose_1.Schema {
    constructor(structure, options) {
        super(Object.assign(Object.assign({}, structure), { createdBy: {
                type: String,
                required: true
            }, updatedBy: {
                type: String
            }, isDeleted: {
                type: Boolean,
                default: false,
                required: true
            } }), Object.assign(Object.assign({}, options), { timestamps: true }));
    }
}
exports.BaseSchema = BaseSchema;
//# sourceMappingURL=base.schema.js.map