// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addMentionListener = (
  handleDrawerOpen: (data: string) => void
) => {
  window.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLInputElement

    if (target && target.nodeName == 'A' && !!target.getAttribute('id')) {
      const mentionActerId = target.getAttribute('id')
      handleDrawerOpen(mentionActerId)
    }
  })
}