"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestSuiteTemplate {
    constructor() { }
    getTemplate() {
        let template = `import { TestSuite, Test, Before, After, Async } from "jec-juta";
import { <% className %> } from "<% relativeClassPath %>";

@TestSuite({
  description: "Test the <% className %> class methods"
})
export class <% name %> {

  @Before()
  public initTest():void {
    // TODO Auto-generated test method stub
  }

  @After()
  public resetTest():void {
    // TODO Auto-generated test method stub
  }
  <% testMethods %>
}
`;
        return template;
    }
}
exports.TestSuiteTemplate = TestSuiteTemplate;
