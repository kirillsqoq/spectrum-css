(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"19mh":function(e,i){const r=[{name:"Radio",status:"Verified",SpectrumSiteSlug:"https://spectrum.adobe.com/page/radio-button/",examples:[{id:"radio",name:"Standard",markup:'<form>\n  <div class="spectrum-Radio">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-0">\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-0">Kittens</label>\n  </div>\n  <div class="spectrum-Radio">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-1" checked>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-1">Puppies</label>\n  </div>\n</form>\n<form>\n  <div class="spectrum-Radio">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-0-disabled" disabled>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-0">Kittens</label>\n  </div>\n  <div class="spectrum-Radio">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-1-disabled" checked disabled>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-1">Puppies</label>\n  </div>\n</form>\n<form>\n  <div class="spectrum-Radio is-invalid">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-0">\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-0">Kittens</label>\n  </div>\n  <div class="spectrum-Radio is-invalid">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-1" checked>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-1">Puppies</label>\n  </div>\n</form>\n<div class="spectrum-Radio">\n  <input type="radio" name="longname" class="spectrum-Radio-input" id="radio-3">\n  <span class="spectrum-Radio-button"></span>\n  <label class="spectrum-Radio-label" for="radio-3">Radio with an extraordinarily long label please don\'t do this but if you did it should truncate text when it gets longer than the container which contains the radio which has an unacceptably long label</label>\n</div>\n'},{id:"radio-quiet",name:"Quiet",markup:'<form>\n  <div class="spectrum-Radio spectrum-Radio--quiet">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-0">\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-0">Kittens</label>\n  </div>\n  <div class="spectrum-Radio spectrum-Radio--quiet">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-1" checked>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-1">Puppies</label>\n  </div>\n</form>\n<form>\n  <div class="spectrum-Radio spectrum-Radio--quiet">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-0-disabled" disabled>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-0">Kittens</label>\n  </div>\n  <div class="spectrum-Radio spectrum-Radio--quiet">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-1-disabled" checked disabled>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-1">Puppies</label>\n  </div>\n</form>\n<form>\n  <div class="spectrum-Radio spectrum-Radio--quiet is-invalid">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-0">\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-0">Kittens</label>\n  </div>\n  <div class="spectrum-Radio spectrum-Radio--quiet is-invalid">\n    <input type="radio" name="pets" class="spectrum-Radio-input" id="radio-1" checked>\n    <span class="spectrum-Radio-button"></span>\n    <label class="spectrum-Radio-label" for="radio-1">Puppies</label>\n  </div>\n</form>\n<div class="spectrum-Radio spectrum-Radio--quiet">\n  <input type="radio" name="longname-quiet" class="spectrum-Radio-input" id="radio-4">\n  <span class="spectrum-Radio-button"></span>\n  <label class="spectrum-Radio-label" for="radio-4">Radio with an extraordinarily long label please don\'t do this but if you did it should truncate text when it gets longer than the container which contains the radio which has an unacceptably long label</label>\n</div>\n'}],packageSlug:"radio",indexCSS:".spectrum-Radio {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: start;\n      align-items: flex-start;\n\n  position: relative;\n\n  min-height: var(--spectrum-radio-height, var(--spectrum-global-dimension-size-400));\n  max-width: 100%;\n\n  margin-right: calc(var(--spectrum-radio-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * 2);\n\n  vertical-align: top;\n}\n\n.spectrum-Radio-input {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  overflow: visible;\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: calc(var(--spectrum-radio-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * -1);\n  width: calc(100% + var(--spectrum-radio-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * 2);\n  height: 100%;\n\n  opacity: .0001;\n  z-index: 1;\n\n  cursor: pointer;\n}\n\n.spectrum-Radio-input:disabled {\n    cursor: default;\n  }\n\n.spectrum-Radio-input:checked + .spectrum-Radio-button {\n    border-width: calc(var(--spectrum-radio-circle-diameter, var(--spectrum-global-dimension-size-175)) / 2 - var(--spectrum-radio-circle-dot-size, var(--spectrum-global-dimension-static-size-50)) / 2);\n  }\n\n.spectrum-Radio-label {\n  margin-left: var(--spectrum-radio-text-gap, var(--spectrum-global-dimension-size-125));\n  font-size: var(--spectrum-radio-text-size, var(--spectrum-alias-font-size-default));\n\n  transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n  margin-top: var(--spectrum-global-dimension-size-75);\n}\n\n.spectrum-Radio-button {\n  position: relative;\n  box-sizing: border-box;\n  width: var(--spectrum-radio-circle-diameter, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-radio-circle-diameter, var(--spectrum-global-dimension-size-175));\n  margin: calc((var(--spectrum-radio-height, var(--spectrum-global-dimension-size-400)) - var(--spectrum-radio-circle-diameter, var(--spectrum-global-dimension-size-175))) / 2) 0;\n\n  -ms-flex-positive: 0;\n\n      flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n\n  border-radius: calc(var(--spectrum-radio-circle-diameter, var(--spectrum-global-dimension-size-175)) / 2);\n  border-width: var(--spectrum-radio-circle-border-size, var(--spectrum-alias-border-size-thick));\n  border-style: solid;\n\n  transition: border var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n}\n\n.spectrum-Radio--labelBelow {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  height: auto;\n}\n\n.spectrum-Radio--labelBelow .spectrum-Radio-button {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n\n    margin: 0;\n  }\n\n.spectrum-Radio--labelBelow .spectrum-Radio-label {\n    margin: var(--spectrum-global-dimension-size-40) 0 0 0;\n  }\n\n.spectrum-Radio .spectrum-Radio-input:checked + .spectrum-Radio-button {\n    border-color: var(--spectrum-radio-circle-border-color-selected, var(--spectrum-global-color-gray-700));\n  }\n\n.spectrum-Radio-label {\n  color: var(--spectrum-radio-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Radio-button {\n  background-color: var(--spectrum-radio-circle-background-color, var(--spectrum-global-color-gray-75));\n  border-color: var(--spectrum-radio-circle-border-color, var(--spectrum-global-color-gray-600));\n}\n\n.spectrum-Radio:hover .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-hover, var(--spectrum-global-color-gray-700));\n      box-shadow: none;\n    }\n\n.spectrum-Radio:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-selected-hover, var(--spectrum-global-color-gray-800));\n\n    }\n\n.spectrum-Radio:hover .spectrum-Radio-label {\n      color: var(--spectrum-radio-text-color-hover, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-Radio:active .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-down, var(--spectrum-global-color-gray-800));\n    }\n\n.spectrum-Radio:active .spectrum-Radio-input:checked + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-selected-down, var(--spectrum-global-color-gray-900));\n\n    }\n\n.spectrum-Radio:active .spectrum-Radio-label {\n      color: var(--spectrum-radio-text-color-down, var(--spectrum-alias-text-color-down));\n    }\n\n.spectrum-Radio--quiet .spectrum-Radio-input:checked + .spectrum-Radio-button {\n    border-color: var(--spectrum-radio-quiet-circle-border-color-selected, var(--spectrum-global-color-gray-700));\n  }\n\n.spectrum-Radio--quiet:hover .spectrum-Radio-input:checked + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-quiet-circle-border-color-selected-hover, var(--spectrum-global-color-gray-800));\n    }\n\n.spectrum-Radio--quiet:active .spectrum-Radio-input:checked + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-quiet-circle-border-color-selected-down, var(--spectrum-global-color-gray-900));\n    }\n\n.spectrum-Radio.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-input + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-error-hover, var(--spectrum-global-color-red-600));\n    }\n\n.spectrum-Radio.is-invalid:hover .spectrum-Radio-label, .spectrum-Radio--quiet.is-invalid:hover .spectrum-Radio-label {\n      color: var(--spectrum-radio-circle-border-color-error-hover, var(--spectrum-global-color-red-600));\n    }\n\n.spectrum-Radio.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-input + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-error-down, var(--spectrum-global-color-red-700));\n    }\n\n.spectrum-Radio.is-invalid:active .spectrum-Radio-label, .spectrum-Radio--quiet.is-invalid:active .spectrum-Radio-label {\n      color: var(--spectrum-radio-circle-border-color-error-down, var(--spectrum-global-color-red-700));\n    }\n\n.spectrum-Radio.is-invalid .spectrum-Radio-button, .spectrum-Radio.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-error, var(--spectrum-global-color-red-500));\n    }\n\n.spectrum-Radio.is-invalid .spectrum-Radio-label, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-label {\n      color: var(--spectrum-radio-circle-border-color-error, var(--spectrum-global-color-red-500));\n    }\n\n.spectrum-Radio-input:disabled + .spectrum-Radio-button {\n    border-color: var(--spectrum-radio-circle-border-color-disabled, var(--spectrum-global-color-gray-400)) !important;\n  }\n\n.spectrum-Radio-input:disabled ~ .spectrum-Radio-label {\n    color: var(--spectrum-radio-text-color-disabled, var(--spectrum-alias-text-color-disabled)) !important;\n  }\n\n.spectrum-Radio .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum-Radio:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring + .spectrum-Radio-button, .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-key-focus, var(--spectrum-global-color-blue-400));\n      box-shadow: 0 0 0 1px var(--spectrum-radio-circle-border-color-key-focus, var(--spectrum-global-color-blue-400));\n    }\n\n.spectrum-Radio .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum-Radio:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum-Radio--quiet .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label, .spectrum-Radio--quiet:hover .spectrum-Radio-input.focus-ring ~ .spectrum-Radio-label {\n      color: var(--spectrum-radio-text-color-key-focus, var(--spectrum-alias-text-color-key-focus));\n    }\n\n.spectrum-Radio.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button, .spectrum-Radio--quiet.is-invalid .spectrum-Radio-input:checked.focus-ring + .spectrum-Radio-button {\n      border-color: var(--spectrum-radio-circle-border-color-key-focus, var(--spectrum-global-color-blue-400));\n      box-shadow: 0 0 0 1px var(--spectrum-radio-circle-border-color-key-focus, var(--spectrum-global-color-blue-400));\n    }\n",devDependencies:{"@spectrum-css/component-builder":"^1.0.0","@spectrum-css/icon":"^2.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/radio",peerCSS:".spectrum-Icon,\n.spectrum-UIIcon {\n  display: inline-block;\n  color: inherit;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.spectrum-Icon:not(:root), .spectrum-UIIcon:not(:root) {\n    overflow: hidden;\n  }\n\n.spectrum-Icon--sizeXXS,\n  .spectrum-Icon--sizeXXS img,\n  .spectrum-Icon--sizeXXS svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Icon--sizeXS,\n  .spectrum-Icon--sizeXS img,\n  .spectrum-Icon--sizeXS svg {\n    height: calc(var(--spectrum-global-dimension-size-300) / 2);\n    width: calc(var(--spectrum-global-dimension-size-300) / 2);\n  }\n\n.spectrum-Icon--sizeS,\n  .spectrum-Icon--sizeS img,\n  .spectrum-Icon--sizeS svg {\n    height: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n    width: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n  }\n\n.spectrum-Icon--sizeM,\n  .spectrum-Icon--sizeM img,\n  .spectrum-Icon--sizeM svg {\n    height: var(--spectrum-global-dimension-size-300);\n    width: var(--spectrum-global-dimension-size-300);\n  }\n\n.spectrum-Icon--sizeL,\n  .spectrum-Icon--sizeL img,\n  .spectrum-Icon--sizeL svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n  }\n\n.spectrum-Icon--sizeXL,\n  .spectrum-Icon--sizeXL img,\n  .spectrum-Icon--sizeXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 2);\n    width: calc(var(--spectrum-global-dimension-size-300) * 2);\n  }\n\n.spectrum-Icon--sizeXXL,\n  .spectrum-Icon--sizeXXL img,\n  .spectrum-Icon--sizeXXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 3);\n    width: calc(var(--spectrum-global-dimension-size-300) * 3);\n  }\n\n.spectrum--medium .spectrum-UIIcon--large {\n    display: none;\n  }\n\n.spectrum--medium .spectrum-UIIcon--medium {\n    display: inline;\n  }\n\n.spectrum--large .spectrum-UIIcon--medium {\n    display: none;\n  }\n\n.spectrum--large .spectrum-UIIcon--large {\n    display: inline;\n  }\n\n.spectrum--large {\n  --ui-icon-large-display: block;\n  --ui-icon-medium-display: none;\n}\n\n.spectrum--medium {\n  --ui-icon-medium-display: block;\n  --ui-icon-large-display: none;\n}\n\n.spectrum-UIIcon--large {\n  display: var(--ui-icon-large-display);\n}\n\n.spectrum-UIIcon--medium {\n  display: var(--ui-icon-medium-display);\n}\n\n.spectrum-UIIcon-AlertMedium {\n  width: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-alert-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-AlertSmall {\n  width: var(--spectrum-icon-alert-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-alert-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-ArrowDownSmall {\n  width: var(--spectrum-icon-arrow-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-arrow-down-small-height);\n}\n\n.spectrum-UIIcon-ArrowLeftMedium {\n  width: var(--spectrum-icon-arrow-left-medium-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-arrow-left-medium-height);\n}\n\n.spectrum-UIIcon-Asterisk {\n  width: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CheckmarkMedium {\n  width: var(--spectrum-icon-checkmark-medium-width);\n  height: var(--spectrum-icon-checkmark-medium-height);\n}\n\n.spectrum-UIIcon-CheckmarkSmall {\n  width: var(--spectrum-icon-checkmark-small-width);\n  height: var(--spectrum-icon-checkmark-small-height);\n}\n\n.spectrum-UIIcon-ChevronDownMedium {\n  width: var(--spectrum-icon-chevron-down-medium-width);\n  height: var(--spectrum-icon-chevron-down-medium-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronDownSmall {\n  width: var(--spectrum-icon-chevron-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-down-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronLeftLarge {\n  width: var(--spectrum-icon-chevron-left-large-width);\n  height: var(--spectrum-icon-chevron-left-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronLeftMedium {\n  width: var(--spectrum-icon-chevron-left-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-left-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightLarge {\n  width: var(--spectrum-icon-chevron-right-large-width);\n  height: var(--spectrum-icon-chevron-right-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronRightMedium {\n  width: var(--spectrum-icon-chevron-right-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightSmall {\n  width: var(--spectrum-icon-chevron-right-small-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-ChevronUpSmall {\n  width: var(--spectrum-icon-chevron-up-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-up-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-CornerTriangle {\n  width: var(--spectrum-icon-cornertriangle-width, var(--spectrum-global-dimension-size-65));\n  height: var(--spectrum-icon-cornertriangle-height, var(--spectrum-global-dimension-size-65));\n}\n\n.spectrum-UIIcon-CrossLarge {\n  width: var(--spectrum-icon-cross-large-width);\n  height: var(--spectrum-icon-cross-large-height);\n}\n\n.spectrum-UIIcon-CrossMedium {\n  width: var(--spectrum-icon-cross-medium-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-medium-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CrossSmall {\n  width: var(--spectrum-icon-cross-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-DashSmall {\n  width: var(--spectrum-icon-dash-small-width);\n  height: var(--spectrum-icon-dash-small-height);\n}\n\n.spectrum-UIIcon-DoubleGripper {\n  width: var(--spectrum-icon-doublegripper-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-doublegripper-height, var(--spectrum-global-dimension-size-50));\n}\n\n.spectrum-UIIcon-FolderBreadcrumb {\n  width: var(--spectrum-icon-folderbreadcrumb-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-folderbreadcrumb-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-InfoMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-InfoSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-Magnifier {\n  width: var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-magnifier-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-SkipLeft {\n  width: var(--spectrum-icon-skip-left-width);\n  height: var(--spectrum-icon-skip-left-height);\n}\n\n.spectrum-UIIcon-SkipRight {\n  width: var(--spectrum-icon-skip-right-width);\n  height: var(--spectrum-icon-skip-right-height);\n}\n\n.spectrum-UIIcon-Star {\n  width: var(--spectrum-icon-star-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-StarOutline {\n  width: var(--spectrum-icon-star-outline-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-outline-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessMedium {\n  width: var(--spectrum-icon-success-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-success-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessSmall {\n  width: var(--spectrum-icon-success-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-success-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-TripleGripper {\n  width: var(--spectrum-icon-triplegripper-width);\n  height: var(--spectrum-icon-triplegripper-height, var(--spectrum-global-dimension-size-85));\n}\n"}];e.exports=r.length<=1?r[0]:r}}]);