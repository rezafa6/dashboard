import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  iconPath = environment.iconPath;
  sidebarState: boolean = true
  constructor() { }

  // sidebar links and icons
  sidebarItems: any[] = [
    {
      title: 'کاربران سامانه',
      links: [
        { title: 'کاربران والدین', icon: 'people.svg' },
        { title: ' تامین کنندگان محتوا', icon: 'monitor-recorder.svg' },
        { title: ' ناظران محتوا', icon: 'security-user.svg' },
      ]
    },

    {
      title: 'بیشتر',
      links: [
        { title: ' مدیران / نقش ها', icon: 'user.svg' },
        { title: 'تگ‌های محتوا', icon: 'hashtag.svg' },
        { title: 'تعرفه‌ها', icon: 'money-4.svg' },
        { title: 'تراکنش‌ها', icon: 'dollar-circle.svg' },
        { title: 'پیامک‌های ارسالی', icon: 'message-text.svg' },
        { title: 'لاگ فعالیت‌ها', icon: 'activity.svg' },
        { title: 'تنظیمات', icon: 'setting-2.svg' },
      ]
    }
  ]
  ngOnInit(): void {
  }


}
