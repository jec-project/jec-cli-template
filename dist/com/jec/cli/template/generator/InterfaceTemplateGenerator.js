"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InterfaceTemplate_1 = require("../resource/InterfaceTemplate");
const AbstractTemplateGenerator_1 = require("../core/AbstractTemplateGenerator");
const SanitizerUtils_1 = require("../util/SanitizerUtils");
class InterfaceTemplateGenerator extends AbstractTemplateGenerator_1.AbstractTemplateGenerator {
    constructor() {
        super();
        this.initObj();
    }
    initObj() {
        this._sanitizerMap = new Map();
        this._sanitizerMap.set("sanitizeStringList", SanitizerUtils_1.SanitizerUtils.sanitizeStringList);
    }
    generate(config) {
        const template = new InterfaceTemplate_1.InterfaceTemplate();
        return template.getTemplate();
    }
    clean(template) {
        return this.cleanPattern(template, "<% pkg %>.", "");
    }
}
exports.InterfaceTemplateGenerator = InterfaceTemplateGenerator;
