module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/alert/src/*.{vue,js,ts,jsx,tsx}',
    './packages/app-bar/src/*.{vue,js,ts,jsx,tsx}',
    './packages/badge/src/*.{vue,js,ts,jsx,tsx}',
    './packages/breadcrumbs/src/*.{vue,js,ts,jsx,tsx}',
    './packages/button/src/*.{vue,js,ts,jsx,tsx}',
    './packages/card/src/*.{vue,js,ts,jsx,tsx}',
    './packages/checkbox/src/*.{vue,js,ts,jsx,tsx}',
    './packages/collapsible/src/*.{vue,js,ts,jsx,tsx}',
    './packages/container/src/*.{vue,js,ts,jsx,tsx}',
    './packages/dropdown/src/*.{vue,js,ts,jsx,tsx}',
    './packages/editor/src/*.{vue,js,ts,jsx,tsx}',
    './packages/file-input/src/*.{vue,js,ts,jsx,tsx}',
    './packages/input/src/*.{vue,js,ts,jsx,tsx}',
    './packages/form-group/src/*.{vue,js,ts,jsx,tsx}',
    './packages/form-select/src/*.{vue,js,ts,jsx,tsx}',
    './packages/layouts/src/*.{vue,js,ts,jsx,tsx}',
    './packages/logo/src/*.{vue,js,ts,jsx,tsx}',
    './packages/menu/src/*.{vue,js,ts,jsx,tsx}',
    './packages/menus/src/*.{vue,js,ts,jsx,tsx}',
    './packages/modal/src/*.{vue,js,ts,jsx,tsx}',
    './packages/multi-select/src/*.{vue,js,ts,jsx,tsx}',
    './packages/nav-drawer/src/*.{vue,js,ts,jsx,tsx}',
    './packages/navbar/src/*.{vue,js,ts,jsx,tsx}',
    './packages/pages/src/*.{vue,js,ts,jsx,tsx}',
    './packages/pagination/src/*.{vue,js,ts,jsx,tsx}',
    './packages/progress/src/*.{vue,js,ts,jsx,tsx}',
    './packages/radio/src/*.{vue,js,ts,jsx,tsx}',
    './packages/select/src/*.{vue,js,ts,jsx,tsx}',
    './packages/services/src/*.{vue,js,ts,jsx,tsx}',
    './packages/spinner/src/*.{vue,js,ts,jsx,tsx}',
    './packages/stats/src/*.{vue,js,ts,jsx,tsx}',
    './packages/switch/src/*.{vue,js,ts,jsx,tsx}',
    './packages/table/src/*.{vue,js,ts,jsx,tsx}',
    './packages/tabs/src/*.{vue,js,ts,jsx,tsx}',
    './packages/textarea/src/*.{vue,js,ts,jsx,tsx}',
    './packages/theme/src/*.{vue,js,ts,jsx,tsx}',
    './packages/toast/src/*.{vue,js,ts,jsx,tsx}',
    './packages/tooltip/src/*.{vue,js,ts,jsx,tsx}',
    './packages/utils/*.{vue,js,ts,jsx,tsx}',
    './packages/autocomplete/src/*.{vue,js,ts,jsx,tsx}',
    './packages/ui/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [require('./packages/tailwind-config/preset')],
};
