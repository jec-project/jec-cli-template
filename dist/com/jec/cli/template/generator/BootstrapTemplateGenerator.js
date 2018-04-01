"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BootstrapTemplate_1 = require("../resource/BootstrapTemplate");
const jec_cli_template_index_1 = require("../../jec-cli-template-index");
class BootstrapTemplateGenerator extends jec_cli_template_index_1.AbstractTemplateGenerator {
    constructor() {
        super();
    }
    generate(config) {
        const template = new BootstrapTemplate_1.BootstrapTemplate();
        return template.getTemplate();
    }
    clean(template) {
        const EMPTY_STRING = "";
        let result = this.cleanPattern(template, "disabled: <% disabled %>,\n  ", EMPTY_STRING);
        result = this.cleanPattern(result, "  index: <% index %>", EMPTY_STRING);
        result = this.cleanPattern(result, "@Bootstrap({\n\n})", "@Bootstrap()");
        return result;
    }
}
exports.BootstrapTemplateGenerator = BootstrapTemplateGenerator;
