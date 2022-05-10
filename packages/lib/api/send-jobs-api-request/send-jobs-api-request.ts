import axios from 'axios'

import { API_SECRET_KEY } from '@acter/lib/constants'

interface SendJobsApiRequestParams {
  url: string
  //eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  data: any
}

export const sendJobsApiRequest = ({
  url,
  data,
}: SendJobsApiRequestParams): void => {
  axios({
    method: 'POST',
    url: `${process.env.BASE_URL}/api/jobs${url}`,
    headers: {
      authorization: API_SECRET_KEY,
    },
    data,
  })
}
