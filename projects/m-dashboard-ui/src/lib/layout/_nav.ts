import { INavData } from '@coreui/angular';

export interface IRoleNavData extends INavData {
  allowedRoles?: string[];
  children?: IRoleNavData[];
}

export interface OrganizationRoleLayoutData {
  orgaRoleString: string;
  roleName: string;
  roleFriendlyName: string;
  orgaName?: string;
}
