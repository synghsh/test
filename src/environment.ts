export const environment = {
  side_nav: [
    {
      key: "dashboard",
      name: "Dashboard",
      icon: "dashboard",
      url: "/dashboard/",
      menuItem: [],
    },
    {
      key: "academics",
      name: "Academics",
      icon: "dashboard",
      url: "/acdemic/",
      menuItem: [
        {
          key: "routine",
          name: "Routine",
          icon: "dashboard",
          url: "/acdemic/acdemic-routine/",
        },
        {
          key: "class_plan",
          name: "Class Plan",
          icon: "dashboard",
          url: "/acdemic/acdemic-class-plan/",
        },
        {
          key: "class_log",
          name: "Class Log",
          icon: "dashboard",
          url: "/acdemic/acdemic-class-log/",
        },
      ],
    },
    {
      key: "website_cotent",
      name: "Website Cotent",
      icon: "dashboard",
      url: "/websiteCotent/",
      menuItem: [
        {
          key: "banner",
          name: "Banner",
          icon: "dashboard",
          url: "/websiteCotent/banner",
        },
        {
          key: "school_logo",
          name: "School Logo",
          icon: "dashboard",
          url: "/websiteCotent/school-logo",
        },
      ],
    },
    {
      key: "change_password",
      name: "Change Password",
      icon: "dashboard",
      url: "/changePassword/",
      menuItem: [],
    },
  ],
};
