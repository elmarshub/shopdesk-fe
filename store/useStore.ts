import { create } from "zustand";

type State = {
  organizationId: string;
  organizationName: string;
  setOrganizationId: (organizationId: string) => void;
  setOrganizationName: (organizationName: string) => void;
};

export const useStore = create<State>((set) => ({
  organizationId: "",
  organizationName: "",
  setOrganizationId: (organizationId) => set({ organizationId }),
  setOrganizationName: (organizationName) => set({ organizationName }),
}));
