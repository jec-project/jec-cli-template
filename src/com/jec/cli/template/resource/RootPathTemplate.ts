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

import {JecTemplate} from "../JecTemplate";

/**
 * The template used to create JARS root path files.
 */
export class RootPathTemplate implements JecTemplate {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>RootPathTemplate</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getTemplate():string {
    let template:string = 
`import {RootPath} from "jec-jars";

/**
 * <code><% name %></code>: auto-generated root path.
 */
@RootPath({
  path: "/<% path %>",
  ref: "<% ref %>",
  version: {
    prefix: "<% prefix %>",
    major: <% major %>,
    minor: <% minor %>
  }
})
export class <% name %> {}`;
    return template;
  }
}