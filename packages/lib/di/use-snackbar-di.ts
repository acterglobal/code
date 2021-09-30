import { injectable } from 'react-magnetic-di'

import { useSnackbar, ProviderContext } from 'notistack'

export const useSnackbarDi = (): typeof useSnackbar =>
  injectable(
    useSnackbar,
    () =>
      (({
        enqueueSnackbar: () => null,
      } as unknown) as ProviderContext)
  )
