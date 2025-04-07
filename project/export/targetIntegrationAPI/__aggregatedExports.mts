// e2ba642e-bbc2-48c9-b5f5-c8f0978c871e
// 888       888        d8888 8888888b.  888b    888 8888888 888b    888  .d8888b. 
// 888   o   888       d88888 888   Y88b 8888b   888   888   8888b   888 d88P  Y88b
// 888  d8b  888      d88P888 888    888 88888b  888   888   88888b  888 888    888
// 888 d888b 888     d88P 888 888   d88P 888Y88b 888   888   888Y88b 888 888       
// 888d88888b888    d88P  888 8888888P"  888 Y88b888   888   888 Y88b888 888  88888
// 88888P Y88888   d88P   888 888 T88b   888  Y88888   888   888  Y88888 888    888
// 8888P   Y8888  d8888888888 888  T88b  888   Y8888   888   888   Y8888 Y88b  d88P
// 888P     Y888 d88P     888 888   T88b 888    Y888 8888888 888    Y888  "Y8888P88
// NOTE: This file was generated automatically
// DO NOT EDIT THIS FILE DIRECTLY
import {generateTargetIntegrationAPI} from "@enkore/target-js-factory/targetIntegration"
import type {EnkoreTargetIntegrationAPI_V0_Rev0 as API} from "@enkore/spec"
const api = await generateTargetIntegrationAPI({target: "js-none"});
export const apiID = api.apiID
export const apiMajorVersion =  api.apiMajorVersion
export const apiRevision = api.apiRevision
export const compile: API["compile"] = api["compile"];
export const generateProduct: API["generateProduct"] = api["generateProduct"];
export const getBoilerplateFiles: API["getBoilerplateFiles"] = api["getBoilerplateFiles"];
export const getDependenciesToInstall: API["getDependenciesToInstall"] = api["getDependenciesToInstall"];
export const getGitIgnoredFiles: API["getGitIgnoredFiles"] = api["getGitIgnoredFiles"];
export const getInitialInternalData: API["getInitialInternalData"] = api["getInitialInternalData"];
export const hook: API["hook"] = {
	"preCompile": api["hook"]["preCompile"],
	"preInitialize": api["hook"]["preInitialize"],
	"preLint": api["hook"]["preLint"],
}
export const initialize: API["initialize"] = api["initialize"];
export const lint: API["lint"] = api["lint"];
export const preprocess: API["preprocess"] = api["preprocess"];
export const projectSourceFileFilter: API["projectSourceFileFilter"] = api["projectSourceFileFilter"];
export const publishProduct: API["publishProduct"] = api["publishProduct"];
export const testProduct: API["testProduct"] = api["testProduct"];
