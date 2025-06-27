export type Country = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
    official: string;
  };
};

export type Company = {
  id: string;
  name: string;
};
