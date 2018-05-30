"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourceTemplate_1 = require("../resource/ResourceTemplate");
const AbstractTemplateGenerator_1 = require("../core/AbstractTemplateGenerator");
const SanitizerUtils_1 = require("../util/SanitizerUtils");
class ResourceTemplateGenerator extends AbstractTemplateGenerator_1.AbstractTemplateGenerator {
    constructor() {
        super();
        this.initObj();
    }
    initObj() {
        this._sanitizerMap = new Map();
        this._sanitizerMap.set("sanitizeStringList", SanitizerUtils_1.SanitizerUtils.sanitizeStringList);
    }
    generate(config) {
        const template = new ResourceTemplate_1.ResourceTemplate();
        return template.getTemplate();
    }
    clean(template) {
        const EMPTY = "";
        let result = this.cleanPattern(template, '\n@RootPathRefs([<% refs -fn=sanitizeStringList %>])', EMPTY);
        result = this.cleanPattern(template, '\nFIX(<% fix %>)\n\n', EMPTY);
        return result;
    }
}
exports.ResourceTemplateGenerator = ResourceTemplateGenerator;
