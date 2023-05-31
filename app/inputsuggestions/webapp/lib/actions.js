sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Input",
    "sap/m/Column",
    "sap/m/ColumnListItem",
    "sap/m/Label",
    "sap/m/TableSelectDialog",
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
], function (JSONModel, Dialog, Input, Column, ColumnListItem, Label, TableSelectDialog, Filter, FilterOperator) {
    return   {
        edit: function (oEvent, aContexts) {
            const oDataModel = this.getModel(); 
            const getItems = (text) => {
                return {
                    path: '/Authors',
                    template: new ColumnListItem({
                        cells: [
                            new Label({ text })
                        ]
                    })
                }
            }
            
            const columns = [
                new Column({
                    header: new Label({ text: 'Name' })
                })
            ]

            const oDialog = new Dialog({
                title: 'Edit Dialog',
                content: [
                    new Input({
                        showSuggestion: true,
                        showTableSuggestionValueHelp: false,
                        showValueHelp: true,
                        suggestionRows: getItems('{name}'),
                        suggestionColumns: columns,
                        valueHelpRequest: (event) => {
                            const dialog = new TableSelectDialog({
                                title: 'Authors',
                                items: getItems('{name}'),
                                columns,
                            })

                            const handleSearch = (event) => {
                                const value = event.getParameter('value');
                                const filters = [];
                                if (value) {
                                    filters.push(new Filter({
                                        filters: [
                                            new Filter({ path: 'name', operator: FilterOperator.Contains, value1: value }),
                                        ]
                                    }));
                                }
                                dialog.getBinding('items').filter(filters);
                            }

                            dialog.attachSearch(handleSearch);
                            dialog.attachLiveChange(handleSearch);

                            dialog.setModel(oDataModel);
                            // dialog.bindAggregation('items', getItems('{name}'));
                            dialog.open(); 
                        }
                    })
                ],
            });

            oDialog.setModel(oDataModel);

            const jsonModel = new JSONModel({
                Authors: [
                    { Name: 'Author 1' },
                    { Name: 'Author 2' },
                    { Name: 'Author 3' },
                    { Name: 'Author 4' },
                ]
            }); 
            oDialog.setModel(jsonModel, 'dialog');
            oDialog.open();
        }
    }
})