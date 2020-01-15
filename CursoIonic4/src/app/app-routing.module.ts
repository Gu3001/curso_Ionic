import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',// quando não tiver nada vai para home
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'instalacao',
   loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' 
  },
   { path: 'layout',
   loadChildren: './layout/layout.module#LayoutPageModule' 
  },
  { path: 'layout-header-footer', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layout-tabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-menu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split-pane', loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' },
  { path: 'layout-grid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layout-css-utilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'ComponentActionSheet', loadChildren: './component-action-sheet/component-action-sheet.module#ComponentActionSheetPageModule' },
  { path: 'ComponentAlert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'ComponentBadge', loadChildren: './component-badge/component-badge.module#ComponentBadgePageModule' },
  { path: 'ComponentButton', loadChildren: './component-button/component-button.module#ComponentButtonPageModule' },
  { path: 'ComponentCard', loadChildren: './component-card/component-card.module#ComponentCardPageModule' },
  { path: 'ComponentCheckbox', loadChildren: './component-checkbox/component-checkbox.module#ComponentCheckboxPageModule' },
  { path: 'ComponentRadio', loadChildren: './component-radio/component-radio.module#ComponentRadioPageModule' },
  { path: 'ComponentDatetime', loadChildren: './component-datetime/component-datetime.module#ComponentDatetimePageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
