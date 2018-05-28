"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootPathTemplate_1 = require("../resource/RootPathTemplate");
const jec_cli_template_index_1 = require("../../jec-cli-template-index");
class RootPathTemplateGenerator extends jec_cli_template_index_1.AbstractTemplateGenerator {
    constructor() {
        super();
    }
    generate(config) {
        const template = new RootPathTemplate_1.RootPathTemplate();
        return template.getTemplate();
    }
    clean(template) {
        const EMPTY_STRING = "";
        let result = this.cleanPattern(template, "  path: \"/<% path %>\",\n", EMPTY_STRING);
        result = this.cleanPattern(result, "<% prefix %>", "v");
        result = this.cleanPattern(result, "<% major %>", "1");
        result = this.cleanPattern(result, "<% minor %>", "0");
        return result;
    }
}
exports.RootPathTemplateGenerator = RootPathTemplateGenerator;
