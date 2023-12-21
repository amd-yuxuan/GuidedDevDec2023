define("UsrAveragePriceResultPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"type": "crt.TabContainer"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab",
				"properties": [
					"rows",
					"columns",
					"gap"
				]
			},
			{
				"operation": "insert",
				"name": "GridContainer_7lz3i9s",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large"
					},
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_vwu0jqq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_bnha1eq",
					"labelPosition": "auto",
					"control": "$NumberAttribute_bnha1eq"
				},
				"parentName": "GridContainer_7lz3i9s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_z23bd93",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_9apazuy",
					"labelPosition": "auto",
					"control": "$StringAttribute_9apazuy",
					"multiline": true,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_7lz3i9s",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"NumberAttribute_bnha1eq": {
						"modelConfig": {
							"path": "PageParameters.UsrIntegerParameter1"
						}
					},
					"StringAttribute_9apazuy": {
						"modelConfig": {
							"path": "PageParameters.UsrTextParameter1"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});