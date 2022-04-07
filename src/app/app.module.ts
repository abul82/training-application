import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseCmpComponent } from './component/database-cmp/database-cmp.component';
import { UIToolsComponent } from './component/uitools/uitools.component';
import { TrainingComponent } from './component/training/training.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipe/reverse.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { DragDropModule} from '@angular/cdk/drag-drop';
import { VirtualScrollingComponent } from './component/virtual-scrolling/virtual-scrolling.component';
import { DragDropComponent } from './component/drag-drop/drag-drop.component';
import { StylingDirective } from './styling.directive'
import { createCustomElement } from '@angular/elements';
import { FrameworkVoteComponent } from './framework-vote/framework-vote.component';
import { DirectiveCmpComponent } from './component/directive-cmp/directive-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseCmpComponent,
    UIToolsComponent,
    TrainingComponent,
    ReversePipe,
    VirtualScrollingComponent,
    DragDropComponent,
    FrameworkVoteComponent,
    StylingDirective,
    DirectiveCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents:[FrameworkVoteComponent,AppComponent]
})
export class AppModule implements DoBootstrap {
  //For Element Question 6
  constructor(private injector : Injector){
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    //adding bootstrap to App Component
    appRef.bootstrap(AppComponent)

    //Please comment the line number 47 before running for element command
    const el = createCustomElement(FrameworkVoteComponent, {injector : this.injector});
    customElements.define('framework-vote',el);
  }
}
