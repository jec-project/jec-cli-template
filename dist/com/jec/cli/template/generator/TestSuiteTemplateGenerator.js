"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestSuiteTemplate_1 = require("../resource/TestSuiteTemplate");
const AbstractTemplateGenerator_1 = require("../core/AbstractTemplateGenerator");
class TestSuiteTemplateGenerator extends AbstractTemplateGenerator_1.AbstractTemplateGenerator {
    constructor() {
        super();
    }
    getTestMethodTemplate(methodName) {
        return `
  @Test({
    description: "test case for the ${methodName}() method"
  })
  public ${methodName}Test():void {
    // TODO Auto-generated test method stub
  }
  `;
    }
    generate(config) {
        const template = new TestSuiteTemplate_1.TestSuiteTemplate();
        let result = template.getTemplate();
        let methods = config.methods;
        let len = methods.length;
        let testMethods = "";
        while (len--) {
            testMethods += this.getTestMethodTemplate(methods[len]);
        }
        result = result.replace("<% testMethods %>", testMethods);
        return result;
    }
}
exports.TestSuiteTemplateGenerator = TestSuiteTemplateGenerator;
