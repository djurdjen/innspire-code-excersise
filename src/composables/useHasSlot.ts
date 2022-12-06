import { getCurrentInstance } from "vue";

// A composable to request a specific slot from the component it is called in.
// Use inside of the component's setup function()
export function useHasSlot (slot = 'default'): boolean {
  const vm = getCurrentInstance();
  if(vm?.slots) {
    const requestedSlot = vm.slots[slot];
    if(requestedSlot && slot === 'default') {
      return !!requestedSlot().filter(vnode => {
        return vnode.type !== Comment && 
        (vnode.type !== Text || (vnode.children as string).trim() !== '');
      });
    }
    return requestedSlot ? true : false;
  }
  return false;
}
