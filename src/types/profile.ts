export type InputFieldProps = {
  icon: React.ReactNode;
  placeholder?: string;
  value: string | number | undefined;
  label?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
};

export type RoleProps = {
  title: string;
  role: string;
};

export type ToggleProps = {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  onClick?: () => void;
};

export type SecurityProps = {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
};

export type ItemProps = {
  icon: React.ReactNode;
  title: string;
  time: string;
  color: string;
};

export type SidebarProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
   activePage: string;
  setActivePage: React.Dispatch<
    React.SetStateAction<string>
  >;
};

export type Props = {
  activeTab: string;
  setActiveTab: React.Dispatch<
    React.SetStateAction<string>
  >;
};

export type RoleTabsProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<
    React.SetStateAction<string>
  >;
  themeTextColor: string;
  themeBgColor: string;
  buttonBgColor: string;
};