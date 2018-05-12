"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InterfaceTemplate_1 = require("../resource/InterfaceTemplate");
const AbstractTemplateGenerator_1 = require("../core/AbstractTemplateGenerator");
class InterfaceTemplateGenerator extends AbstractTemplateGenerator_1.AbstractTemplateGenerator {
    constructor() {
        super();
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
