import React from 'react'
import { Accordion, Table, Image } from 'react-bootstrap'

import * as types from '@/types'
import { improveProps } from '@/constants'
import { convertToKiB } from '@/utils/converter'

type Props = {
  results: types.api.Response
}

const ImproveList: React.FC<Props> = ({ results }) => {
  const audits = results.data.lighthouseResult.audits

  return (
    <>
      <Accordion defaultActiveKey={null}>
        {improveProps.map((x, idx) => (
          <div key={x}>
            {!!audits[x].details.items.length && (
              <Accordion.Item eventKey={`${idx}`}>
                <Accordion.Header>{audits[x].title}</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
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
                              <p>{y.node?.selector}</p>
                              <Image width={150} src={y.url} alt="" />
                            </td>
                          )}
                          <td>{y.url}</td>
                          <td>{convertToKiB(y.totalBytes)}KiB</td>
                          <td>{convertToKiB(y.wastedBytes)}KiB</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </div>
        ))}
      </Accordion>
    </>
  )
}

export default ImproveList
