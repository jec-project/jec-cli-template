"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourceTemplate_1 = require("../resource/ResourceTemplate");
const AbstractTemplateGenerator_1 = require("../core/AbstractTemplateGenerator");
const SanitizerUtils_1 = require("../util/SanitizerUtils");
class ResourceTemplateGenerator extends AbstractTemplateGenerator_1.AbstractTemplateGenerator {
    constructor() {
        super();
        this.ROOTPATHREFS_DECORATOR = "@RootPathRefs";
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
        let result = this.cleanPattern(template, '\n@RootPathRefs\(\[<% rootPathRefs -fn=sanitizeStringList %>\]\)', EMPTY);
        result = this.cleanPattern(result, '\nFIX(<% fix %>)\n\n', EMPTY);
        if (result.indexOf(this.ROOTPATHREFS_DECORATOR) === -1) {
            result = this.cleanPattern(result, 'RootPathRefs, ', EMPTY);
        }
        return result;
    }
}
exports.ResourceTemplateGenerator = ResourceTemplateGenerator;
