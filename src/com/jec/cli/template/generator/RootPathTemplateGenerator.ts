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
import {RootPathTemplate} from "../resource/RootPathTemplate";
import {JecTemplate} from "../JecTemplate";
import {AbstractTemplateGenerator} from "../../jec-cli-template-index";

/**
 * The template used to create JARS root path files.
 */
export class RootPathTemplateGenerator extends AbstractTemplateGenerator
                                       implements TemplateGenerator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>RootPathTemplate</code> instance.
   */
  constructor() {
    super();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public generate(config:any):string {
    const template:JecTemplate = new RootPathTemplate();
    return template.getTemplate();
  }
  
  /**
   * @inheritDoc
   */
  public clean(template:string):string {
    const EMPTY_STRING:string = "";
    let result:string = 
        this.cleanPattern(template, "  path: \"/<% path %>\",\n", EMPTY_STRING);
    result = this.cleanPattern(result, "<% prefix %>", "v");
    result = this.cleanPattern(result, "<% major %>", "1");
    result = this.cleanPattern(result, "<% minor %>", "0");
    return result;
  }
}