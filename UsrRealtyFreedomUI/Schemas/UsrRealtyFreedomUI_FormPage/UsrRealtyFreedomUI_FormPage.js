define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f39151d7-f5b9-4b91-818d-052d684666da",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_1rn2upo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_1rn2upo_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"layoutConfig": {},
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_1dujb7r",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_1dujb7r_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAvgPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_1rn2upo",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_gwe8rfy_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"layoutConfig": {},
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2pxixjq",
					"labelPosition": "auto",
					"control": "$NumberAttribute_2pxixjq"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_rmi47js",
					"labelPosition": "auto",
					"control": "$NumberAttribute_rmi47js"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommissionPercent",
					"control": "$UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_cm6bne3",
					"labelPosition": "auto",
					"control": "$NumberAttribute_cm6bne3",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_762xpw5",
					"labelPosition": "auto",
					"control": "$LookupAttribute_762xpw5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ccicv5b",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ccicv5b",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_tv02jnu",
					"labelPosition": "auto",
					"control": "$StringAttribute_tv02jnu",
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_gwy0g5e",
					"labelPosition": "auto",
					"control": "$LookupAttribute_gwy0g5e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_7gh8c0s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7gh8c0s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_46akx6v",
					"labelPosition": "auto",
					"control": "$LookupAttribute_46akx6v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_xoq0gii",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xoq0gii_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCity",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1q2swu7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1q2swu7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_r0fwty2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_r0fwty2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hjb244z",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hjb244z_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_z0w7qzg",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hjb244z",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_afmc3pg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_z0w7qzg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_muguuuo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_muguuuo_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_afmc3pg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_yug6qxp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_yug6qxp_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_afmc3pg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_nghlks2",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_nghlks2_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_xyhjf0o"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yug6qxp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_avnq5i7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_avnq5i7_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yug6qxp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_sb4jyng",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_sb4jyng_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_xyhjf0o"
					]
				},
				"parentName": "FlexContainer_afmc3pg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_jnhdvq2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hjb244z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_xyhjf0o",
					"activeRow": "$GridDetail_xyhjf0o_ActiveRow",
					"selectionState": "$GridDetail_xyhjf0o_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_xyhjf0o_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_xyhjf0oDS_Id",
					"columns": [
						{
							"id": "f79518e3-e71e-c2f6-a175-2ca5ebaba17a",
							"code": "GridDetail_xyhjf0oDS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_xyhjf0oDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "b21c831e-f8e0-8a6e-b32a-40b151a25efe",
							"code": "GridDetail_xyhjf0oDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_xyhjf0oDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "adfbdd5a-18fe-ebad-161c-7cfb141bc7ec",
							"code": "GridDetail_xyhjf0oDS_UsrComment",
							"caption": "#ResourceString(GridDetail_xyhjf0oDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "f29b342d-033c-36b3-998f-e722da96c048",
							"code": "GridDetail_xyhjf0oDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_xyhjf0oDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_jnhdvq2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xyhjf0o_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_xyhjf0o",
							"filters": "$GridDetail_xyhjf0o | crt.ToCollectionFilters : 'GridDetail_xyhjf0o' : $GridDetail_xyhjf0o_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xyhjf0o_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xyhjf0o_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xyhjf0oDS",
							"filters": "$GridDetail_xyhjf0o | crt.ToCollectionFilters : 'GridDetail_xyhjf0o' : $GridDetail_xyhjf0o_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xyhjf0o_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
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
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"NumberAttribute_2pxixjq": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"NumberAttribute_rmi47js": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"LookupAttribute_762xpw5": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"LookupAttribute_ccicv5b": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"StringAttribute_tv02jnu": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"LookupAttribute_gwy0g5e": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"LookupAttribute_46akx6v": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"LookupAttribute_1q2swu7": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"NumberAttribute_cm6bne3": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_xyhjf0o": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_xyhjf0oDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_xyhjf0oDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_xyhjf0oDS.UsrVisitDateTime"
									}
								},
								"GridDetail_xyhjf0oDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_xyhjf0oDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_xyhjf0oDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_xyhjf0oDS.UsrComment"
									}
								},
								"GridDetail_xyhjf0oDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_xyhjf0oDS.CreatedOn"
									}
								},
								"GridDetail_xyhjf0oDS_Id": {
									"modelConfig": {
										"path": "GridDetail_xyhjf0oDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_xyhjf0oDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_xyhjf0oDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.NumberAttribute_2pxixjq;
					this.console.log("Price = " + price);
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}				
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_2pxixjq' || 					// if price changed
					   request.attributeName === 'UsrOfferTypeUsrCommissionPercent' ) { 		// or multiplier changed
						var price = await request.$context.NumberAttribute_2pxixjq;
						var percent = await request.$context.UsrOfferTypeUsrCommissionPercent;
						var commission = price * percent / 100;
						request.$context.NumberAttribute_cm6bne3 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});