import { Accordion, Table, Image, Box, Text } from '@mantine/core'
import React from 'react'

import { improveProps } from '@/constants'
import * as types from '@/types'
import { convertToKiB } from '@/utils/converter'

type Props = {
  results: types.api.SuccessResponse
}

export const ImproveList: React.FC<Props> = ({ results }) => {
  const audits = results.data.lighthouseResult.audits

  return (
    <>
      <Accordion>
        {improveProps.map((x, idx) => (
          <Box key={x}>
            {!!audits[x].details.items.length && (
              <Accordion.Item value={`item-${idx}`}>
                <Accordion.Control>{audits[x].title}</Accordion.Control>
                <Accordion.Panel>
                  <p>{audits[x].description}</p>
                  <Table striped>
                    <thead>
                      <tr>
                        {audits[x].details.headings.map((y, i) => (
                          <th key={i}>{y.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {audits[x].details.items.map((y, i) => (
                        <tr key={i}>
                          {(x === 'modern-image-formats' ||
                            x === 'uses-responsive-images' ||
                            x === 'offscreen-images') && (
                            <td>
                              <Text>{y.node?.selector}</Text>
                              <Image src={y.url} alt="" w={120} />
                            </td>
                          )}
                          <td>{y.url}</td>
                          {x === 'server-response-time' ? (
                            <td>{convertToKiB(y.responseTime)}KiB</td>
                          ) : (
                            <>
                              <td>{convertToKiB(y.totalBytes)}KiB</td>
                              <td>{convertToKiB(y.wastedBytes)}KiB</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Panel>
              </Accordion.Item>
            )}
          </Box>
        ))}
      </Accordion>
    </>
  )
}
