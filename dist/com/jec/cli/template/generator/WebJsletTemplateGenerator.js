"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebJsletTemplate_1 = require("../resource/WebJsletTemplate");
const jec_cli_template_index_1 = require("../../jec-cli-template-index");
class WebJsletTemplateGenerator extends jec_cli_template_index_1.AbstractTemplateGenerator {
    constructor() {
        super();
    }
    generate(config) {
        const template = new WebJsletTemplate_1.WebJsletTemplate();
        return template.getTemplate();
    }
}
exports.WebJsletTemplateGenerator = WebJsletTemplateGenerator;
