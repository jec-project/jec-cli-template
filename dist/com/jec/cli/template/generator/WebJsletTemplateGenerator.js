"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebJsletTemplate_1 = require("../resource/WebJsletTemplate");
const AbstractTemplateGenerator_1 = require("../core/AbstractTemplateGenerator");
const SanitizerUtils_1 = require("../util/SanitizerUtils");
class WebJsletTemplateGenerator extends AbstractTemplateGenerator_1.AbstractTemplateGenerator {
    constructor() {
        super();
        this.initObj();
    }
    initObj() {
        this._sanitizerMap = new Map();
        this._sanitizerMap.set("sanitizeStringList", SanitizerUtils_1.SanitizerUtils.sanitizeStringList);
    }
    generate(config) {
        const template = new WebJsletTemplate_1.WebJsletTemplate();
        return template.getTemplate();
    }
    clean(template) {
        let result = this.cleanPattern(template, ',\n  template: "<% template %>"', "");
        return result;
    }
}
exports.WebJsletTemplateGenerator = WebJsletTemplateGenerator;
