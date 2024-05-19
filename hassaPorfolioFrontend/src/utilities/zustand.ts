import { create } from "zustand";
interface Props {
  subsForms: boolean;
  subsFixForms: boolean;
  setSubsForm: (show: boolean) => void;
  setSubsFixForm: (show: boolean) => void;
}
const useZustand = create<Props>((set) => ({
  subsForms: false,
  subsFixForms: false,
  setSubsForm: (show: boolean) => set(() => ({ subsForms: show })),
  setSubsFixForm: (show: boolean) => set(() => ({ subsFixForms: show })),
}));
export default useZustand;
