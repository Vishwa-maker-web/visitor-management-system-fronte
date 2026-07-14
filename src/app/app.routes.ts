import { Routes } from '@angular/router';

import { Dashboard } from './components/dashboard/dashboard';
import { RegisterVisitor } from './components/register-visitor/register-visitor';
import { VisitorList } from './components/visitor-list/visitor-list';
import { MeetingRoom } from './components/meeting-room/meeting-room';
import { NotificationComponent } from './components/notification/notification';
import { ReceptionComponent } from './components/reception/reception';
import { VerifyOtp } from './components/verify-otp/verify-otp';
import { Qr } from './components/qr/qr';
import { Scanner } from './components/scanner/scanner';
import { IndoorRoute } from './components/indoor-route/indoor-route';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin-login/admin-login';
import { Reports } from './components/reports/reports';
import { AuditLogs } from './components/audit-logs/audit-logs';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'register', component: RegisterVisitor },
  { path: 'visitors', component: VisitorList },
  { path: 'meeting-room', component: MeetingRoom },
  { path: 'notification', component: NotificationComponent },
  { path: 'reception', component: ReceptionComponent },
    { path: 'verify-otp', component: VerifyOtp },
      { path: 'qr', component: Qr },
      {path: 'scanner', component:Scanner},
      {path: 'route', component:IndoorRoute},
      {path: 'admin-login', component:AdminLogin},
      {path: 'reports', component: Reports},
      {path: 'audit-logs', component:AuditLogs}
];