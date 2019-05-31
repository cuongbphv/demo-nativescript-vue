# NativeScript-Vue Application

> A native application built with NativeScript-Vue

## 1. Usage

``` bash
# Install Vue and Vue CLI-init
npm install -g @vue/cli @vue/cli-init

# Install Nativescript
npm install -g nativescript

# Create project with Nativescript-vue template
vue init nativescript-vue/vue-cli-template <project-name>

# Switch to project
cd <project-name>

# Install dependencies
npm install

# Check connected device
tns device

# Check dependencies and plugin in app
tns plugin list

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle

# If error Class Main Application, let run with command
tns run --clean <platform> --bundle

# Add new plugin to Nativescript-Vue
tns plugin add <library>
```

## 2. Nativescript Dependencies
- **axios** communicate API,
- **nativescript-fonticon** show icon such as font-awesome
- **nativescript-local-notifications** push local notification
- **nativescript-theme-core** css theme for android or ios
- **nativescript-ui-chart** chart for nativescript app
- **nativescript-ui-dataform** work with form, validation
- **nativescript-ui-listview** list view and custom list view
- **nativescript-ui-sidedrawer** sidebar for mobile app
- **nativescript-vue-devtools** devtools for logging and debugging
- **tns-core-modules** core module for nativescript app

## 3. Config router manual
- Define router (activity or fragment)
``` bash
import Home from '~/pages/Home'

const routes = {
    Home
}

export default routes
```
- Call to router or switch to page in Vue
``` bash
this.$navigateTo(this.$routes.Home)
```

## 4. How to use icon in Nativescript-vue
- Place css in folder 'assests/css' , fonts in folder 'fonts'
- Install plugin nativescript-fonticon
-  Import and install as below code in main.js
``` bash
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true; // load all icon in app when start

TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};

TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);
```
- Finally apply filter as below code
``` bash
<Label class="fas" :text="'fa-bars' | fonticon" @tap="openDrawer()" />
```

## 5. Referrence
- Nativescript plugins: https://www.nsplugins.com/
- Nativescript-vue docs: https://nativescript-vue.org/en/docs/introduction/
- Nativescript-vue UI docs: https://docs.nativescript.org/vuejs/nativescript-vuejs