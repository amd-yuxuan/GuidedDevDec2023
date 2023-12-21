define("UsrRealtyVisitFreedomUIPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_94d5l35",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_ta1wau2",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_ta1wau2"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_hwuxckw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_dfd5vpd",
					"labelPosition": "above",
					"control": "$LookupAttribute_dfd5vpd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_k47rq6j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_k47rq6j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hwuxckw",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_ob7le9b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_ri3iw8g",
					"labelPosition": "above",
					"control": "$StringAttribute_ri3iw8g"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DateTimeAttribute_dm3xp1h": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrColumn5"
						}
					},
					"LookupAttribute_dfd5vpd": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustomer"
						}
					},
					"DateTimeAttribute_ta1wau2": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
						}
					},
					"StringAttribute_ri3iw8g": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitFreedomUI"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});