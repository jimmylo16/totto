import { GlobalContext } from "@/components/GlobalProvider";
import { useContext } from "react";

export const useGlobalState = () => useContext(GlobalContext);
