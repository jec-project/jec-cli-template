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
import {ResourceTemplate} from "../resource/ResourceTemplate";
import {JecTemplate} from "../JecTemplate";
import {AbstractTemplateGenerator} from "../core/AbstractTemplateGenerator";
import {SanitizerUtils} from "../util/SanitizerUtils";

/**
 * The template used to create JARS resource files.
 */
export class ResourceTemplateGenerator extends AbstractTemplateGenerator
                                       implements TemplateGenerator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ResourceTemplateGenerator</code> instance.
   */
  constructor() {
    super();
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A reference to the <code>@RootPathRefs</code> decorator string.
   */
  private readonly ROOTPATHREFS_DECORATOR:string = "@RootPathRefs";

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._sanitizerMap = new Map<string, Function>();
    this._sanitizerMap.set(
      "sanitizeStringList", SanitizerUtils.sanitizeStringList
    );
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public generate(config:any):string {
    const template:JecTemplate = new ResourceTemplate();
    return template.getTemplate();
  }
  
  /**
   * @inheritDoc
   */
  public clean(template:string):string {
    const EMPTY:string = "";
    let result:string = this.cleanPattern(
      template, 
      '\n@RootPathRefs\(\[<% rootPathRefs -fn=sanitizeStringList %>\]\)', 
      EMPTY
    );
    result = this.cleanPattern(result, '\nFIX(<% fix %>)\n\n', EMPTY);
    if(result.indexOf(this.ROOTPATHREFS_DECORATOR) === -1) {
      result = this.cleanPattern(result, 'RootPathRefs, ', EMPTY);
    }
    return result;
  }
}