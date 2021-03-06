// import FlexLayout from './layouts/FlexLayout'
import styled from 'styled-components'
import GridLayout from './layouts/GridLayout'
import RTable from './components/RTable'
import Dialog from './components/Dialog'
import { useState } from 'react'

const ContentWrapper = styled.div`
  padding: 16px;
`

const Section = styled.section`
  margin-bottom: 16px;
`

const SectionTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: #bf7f2f;
`

const assignTasks = Array.from(Array(13), (_, index) => ({
  label: index.toString().padStart(2, 0) + ' - unassigned',
  value: index,
  disabled: !!Math.round(Math.random()),
}))

function App() {
  const answer2Columns = [
    {
      type: 'checkbox',
    },
    {},
    {
      label: 'status',
      prop: 'label',
      width: 150,
    },
  ]
  const answer2Data = assignTasks

  const answer3Columns = [
    {
      label: 'method',
      prop: 'method',
      width: 100,
    },
    {
      label: 'idempotence',
      prop: 'idempotence',
      width: 20,
    },
    {
      label: 'safety',
      prop: 'safety',
      width: 20,
    },
    {
      label: 'params',
      prop: 'params',
      width: 200,
    },
    {
      label: 'description',
      width: 200,
      render: (cell) => cell.description(),
    },
  ]

  const answer3Data = [
    {
      method: 'GET',
      idempotence: 'yes',
      safety: 'yes',
      params: 'URL query parameters',
      description: () => (
        <>
          <p>Search an instance or instances by conditions.</p>
          <br />
          <pre>
            books/{'\n'}
            books/?title_q=cat{'\n'}
            books/?title=cat%20walk{'\n'}
            books/:id/{'\n'}
          </pre>
        </>
      ),
    },
    {
      method: 'HEAD',
      idempotence: 'yes',
      safety: 'yes',
      params: 'URL query parameters',
      description: () => (
        <p>
          Same as GET, but it only requests for header, not content. For
          example, you can access file size without actually downloading file.
        </p>
      ),
    },
    {
      method: 'POST',
      idempotence: 'no',
      safety: 'no',
      params: 'Request body',
      description: () => (
        <>
          <p>Create an instance.</p>
          <br />
          <pre>
            books/{'\n'}
            {'{"title": "cat walk", "author": "lilybon"}'}
          </pre>
        </>
      ),
    },
    {
      method: 'PUT',
      idempotence: 'yes',
      safety: 'no',
      params: 'Request body',
      description: () => (
        <>
          <p>Replace all properties of an instance.</p>
          <br />
          <pre>
            books/:id/{'\n'}
            {'{"title": "cat run", "author": "lilybon"}'}
          </pre>
        </>
      ),
    },
    {
      method: 'PATCH',
      idempotence: 'no',
      safety: 'no',
      params: 'Request body',
      description: () => (
        <>
          <p>Update partial properties of an instance.</p>
          <br />
          <pre>
            books/:id/{'\n'}
            {'{"title": "cat run"}'}
          </pre>
        </>
      ),
    },
    {
      method: 'DELETE',
      idempotence: 'yes',
      safety: 'no',
      params: 'Request body',
      description: () => 'books/:id/',
    },
    {
      method: 'OPTIONS',
      idempotence: 'yes',
      safety: 'yes',
      params: '-',
      description: () =>
        'Commonly, it comes up by CORS case, client will send a safe preflight request before sending actual request. It gives server a chance to examine what the actual request will look like before it make.',
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  return (
    // <FlexLayout />
    <GridLayout
      main={
        <ContentWrapper>
          <Section>
            <SectionTitle>answer 1. layout</SectionTitle>
            <p>Grid is great.</p>
          </Section>
          <Section>
            <SectionTitle>answer 2. checkboxes</SectionTitle>
            <RTable columns={answer2Columns} data={answer2Data} />
          </Section>
          <Section>
            <SectionTitle>
              answer 3. common CRUD APIs and their specification
            </SectionTitle>
            <RTable columns={answer3Columns} data={answer3Data} />
          </Section>
          <Section>
            <SectionTitle>extra. play with react portal</SectionTitle>
            <button onClick={() => setIsVisible(true)}>Open dialog</button>
            <Dialog visible={isVisible} onClose={() => setIsVisible(false)}>
              <Dialog.Body>
                <span>This is a message.</span>
              </Dialog.Body>
              <Dialog.Footer>
                <button onClick={() => setIsVisible(false)}>Cancel</button>
              </Dialog.Footer>
            </Dialog>
          </Section>
        </ContentWrapper>
      }
    />
  )
}

export default App
