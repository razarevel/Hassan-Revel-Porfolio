import { create } from "zustand";
interface Props {
  subsForms: boolean;
  subsFixForms: boolean;
  setSubsForm: (show: boolean) => void;
  setSubsFixForm: (show: boolean) => void;
  // array
  revInViews: [number, number, number];
  setInViews: (newArray: [number, number, number]) => void;
}
const useZustand = create<Props>((set) => ({
  subsForms: false,
  subsFixForms: false,
  setSubsForm: (show: boolean) => set(() => ({ subsForms: show })),
  setSubsFixForm: (show: boolean) => set(() => ({ subsFixForms: show })),
  // array
  revInViews: [0, 1, 2],
  setInViews: (newArray: [number, number, number]) =>
    set(() => ({ revInViews: newArray })),
}));
export default useZustand;
