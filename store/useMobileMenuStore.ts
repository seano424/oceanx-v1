import {create} from 'zustand'

interface MobileMenuStore {
  isOpen: boolean
  toggle: () => void
}

export const useMobileMenuStore = create<MobileMenuStore>()((set) => ({
  isOpen: false,
  toggle: () => set((state: {isOpen: boolean}) => ({isOpen: !state.isOpen})),
}))
