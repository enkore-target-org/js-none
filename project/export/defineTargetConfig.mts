import {
	type RawType,
	type EnkoreTargetJSNone_V0_Rev0,
	createEntity
} from "@enkore/spec"

export function defineTargetConfig(
	config: Omit<RawType<EnkoreTargetJSNone_V0_Rev0>, "_targetIdentifier">
) {
	return createEntity("EnkoreTargetJSNone", 0, 0, {
		_targetIdentifier: "js-none",
		...config
	})
}
