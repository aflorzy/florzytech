export type CompanyDetails = {
  fullName: string;
  shortName: string;
  phone: string;
  email: string;
  socials: {
    [key: string]: string;
  };
};
