sap.ui.define([
    "sap/m/Dialog",
    "sap/m/Input",
    "sap/m/Column",
    "sap/m/ColumnListItem",
    "sap/m/Label",
], function (Dialog, Input, Column, ColumnListItem, Label) {
    return   {
        edit: function (oEvent, aContexts) {
            const oDialog = new Dialog({
                title: 'Edit Dialog',
                content: [
                    new Input({
                        showSuggestion: true,
                        showTableSuggestionValueHelp: false,
                        showValueHelp: true,
                        suggestionRows: {
                            path: '/Authors',
                            template: new ColumnListItem({
                                cells: [
                                    new Label({ text: '{name}' })
                                ]
                            }) 
                        },
                        suggestionColumns: [
                            new Column({
                                header: new Label({ text: 'Name' })
                            })
                        ]
                    })
                ],
            });

            oDialog.setModel(this.getModel());
            oDialog.open();
        }
    }
})