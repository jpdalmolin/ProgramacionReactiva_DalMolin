import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserMockService } from './mocks/user-mock.service';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [UsersComponent, UserFormDialogComponent, UsersTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [UsersComponent],
  providers: [
 UserMockService,

    {
      provide: 'IS_DEV',
      useValue: false,
    },

  ],
})
export class UsersModule {}
