import { App } from 'vue'
import { NButton, NCard, NConfigProvider, NDataTable, NForm, NFormItem, NGlobalStyle, NInput, NInputNumber, NLoadingBarProvider, NMessageProvider, NModal, NSelect } from 'naive-ui'

export default {
  install(_app: App) {
    _app.component('NButton', NButton)
    _app.component('NForm', NForm)
    _app.component('NFormItem', NFormItem)
    _app.component('NInput', NInput)
    _app.component('NInputNumber', NInputNumber)
    _app.component('NCard', NCard)
    _app.component('NLoadingBarProvider', NLoadingBarProvider)
    _app.component('NMessageProvider', NMessageProvider)
    _app.component('NSelect', NSelect)
    _app.component('NModal', NModal)
    _app.component('NDataTable', NDataTable)
    _app.component('NConfigProvider', NConfigProvider)
    _app.component('NGlobalStyle', NGlobalStyle)
  }
}