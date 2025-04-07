import {generateAPIExportGlueCode} from "@enkore/target-js-factory"
import {getTargetIntegrationAPIMethodNames} from "@enkore/target-js-factory/targetIntegration"
import {getRuntimeAPIMethodNames} from "@enkore/target-js-factory/runtime"
import {
	createConfig,
	createTargetJSNoneOptions,
	createAutogeneratedFile
} from "enkore/spec/factory"

export default createConfig({
	target: {
		name: "js-none",
		options: createTargetJSNoneOptions({
			exports: {
				"targetIntegrationAPI": {
					checkAgainstInterface: [
						"@enkore/spec",
						"EnkoreTargetIntegrationAPI_V0_Rev0"
					]
				}
			}
		})
	},

	autogeneratedFiles: [
		createAutogeneratedFile({
			destinationPath: `project/export/targetIntegrationAPI/__aggregatedExports.mts`,
			generator() {
				let code = ``

				code += `import {generateTargetIntegrationAPI} from "@enkore/target-js-factory/targetIntegration"\n`
				code += `import type {EnkoreTargetIntegrationAPI_V0_Rev0 as API} from "@enkore/spec"\n`

				code += `const api = await generateTargetIntegrationAPI("js-none");\n`

				code += generateAPIExportGlueCode(
					"API", "api", getTargetIntegrationAPIMethodNames()
				)

				return code
			}
		}),

		createAutogeneratedFile({
			destinationPath: `project/export/runtime/__aggregatedExports.mts`,
			generator() {
				let code = ``

				code += `import {generateRuntimeAPI} from "@enkore/target-js-factory/runtime"\n`
				code += `import type {EnkoreTargetJSRuntimeAPI_V0_Rev0 as API} from "@enkore/spec"\n`

				code += `const api = await generateRuntimeAPI(["inferFromCLIArgs"]);\n`

				code += generateAPIExportGlueCode(
					"API", "api", getRuntimeAPIMethodNames()
				)

				return code
			}
		})
	]
})
