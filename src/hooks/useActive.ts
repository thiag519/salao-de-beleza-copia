import { useContext } from "react";
import {ActiveContext} from '@/context/ActiveContext'

export const useActive = () => {
  const contest =useContext(ActiveContext);
  if(!contest) {
    throw new Error('useActive must be used within a ActiveProvider');
  }
  return contest;
}