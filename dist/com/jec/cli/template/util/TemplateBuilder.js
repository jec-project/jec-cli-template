"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplatePropertiesProcessor_1 = require("../util/TemplatePropertiesProcessor");
const MapUtils_1 = require("../util/MapUtils");
class TemplateBuilder {
    constructor() { }
    build(generatorClass, config) {
        const processor = new TemplatePropertiesProcessor_1.TemplatePropertiesProcessor();
        const mapConfig = MapUtils_1.MapUtils.objectToMap(config);
        let generator = new generatorClass();
        let template = processor.resolve(generator.generate(config), mapConfig);
        template = generator.clean(template);
        return template;
    }
}
exports.TemplateBuilder = TemplateBuilder;
