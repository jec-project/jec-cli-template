//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {TemplateGenerator} from "../TemplateGenerator";
import {TestSuiteTemplate} from "../resource/TestSuiteTemplate";
import {JecTemplate} from "../JecTemplate";
import {AbstractTemplateGenerator} from "../core/AbstractTemplateGenerator";

/**
 * The template used to create JEC test suite files.
 */
export class TestSuiteTemplateGenerator extends AbstractTemplateGenerator
                                        implements TemplateGenerator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>TestSuiteTemplateGenerator</code> instance.
   */
  constructor() {
    super();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the test case template for the specified method name.
   * 
   * @param {string} methodName the name of the method for which to create a
   *                            test case template.
   * @return {string} the test case template for the specified method.
   */
  private getTestMethodTemplate(methodName:string):string {
    return `
  @Test({
    description: "test case for the ${methodName}() method"
  })
  public ${methodName}Test():void {
    // TODO Auto-generated test method stub
  }
  `;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public generate(config:any):string {
    const template:JecTemplate = new TestSuiteTemplate();
    let result:string = template.getTemplate();
    let methods:string = config.methods;
    let len:number = methods.length;
    let testMethods:string = "";
    while(len--) {
      testMethods += this.getTestMethodTemplate(methods[len]);
    }
    result = result.replace("<% testMethods %>", testMethods)
    return result;
  }
}