// import FlexLayout from './layouts/FlexLayout'
import styled from 'styled-components'
import GridLayout from './layouts/GridLayout'
import RTable from './components/RTable'

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
`

function App() {
  const options = Array.from(Array(13), (_, index) => ({
    label: index.toString().padStart(2, 0) + ' - unassigned',
    value: index,
    disabled: !!Math.round(Math.random()),
  }))
  return (
    // <FlexLayout />
    <GridLayout
      main={
        <ContentWrapper>
          <Section>
            <SectionTitle>ans 2. checkboxes</SectionTitle>
            <RTable
              head={
                <tr>
                  <th>
                    <input type="checkbox" value=""></input>
                  </th>
                  <th width={10}></th>
                  <th>status</th>
                </tr>
              }
              body={options.map((option) => (
                <tr key={option.value}>
                  <td>
                    {!option.disabled && (
                      <input type="checkbox" value={option.value} />
                    )}
                  </td>
                  <td></td>
                  <td>{option.label}</td>
                </tr>
              ))}
            />
          </Section>
          <Section>
            <SectionTitle>
              ans 3. common CRUD APIs and their specification
            </SectionTitle>
            <RTable
              head={
                <tr>
                  <th>method</th>
                  <th>idempotence</th>
                  <th>safety</th>
                  <th>params</th>
                  <th>description</th>
                </tr>
              }
              body={
                <>
                  <tr>
                    <td>GET</td>
                    <td>yes</td>
                    <td>yes</td>
                    <td>URL query parameters</td>
                    <td width={'200px'}>
                      <p>Search an instance or instances by conditions.</p>
                      <br />
                      <pre>
                        books/{'\n'}
                        books/?title_q=cat{'\n'}
                        books/?title=cat%20walk{'\n'}
                        books/:id/{'\n'}
                      </pre>
                    </td>
                  </tr>
                  <tr>
                    <td>HEAD</td>
                    <td>yes</td>
                    <td>yes</td>
                    <td>URL query parameters</td>
                    <td width={'200px'}>
                      <p>
                        Same as GET, but it only requests for header, not
                        content. For example, you can access file size without
                        actually downloading file.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>POST</td>
                    <td>no</td>
                    <td>no</td>
                    <td>Request body</td>
                    <td>
                      <p>Create an instance.</p>
                      <br />
                      <pre>
                        books/{'\n'}
                        {'{"title": "cat walk", "author": "lilybon"}'}
                      </pre>
                    </td>
                  </tr>
                  <tr>
                    <td>PUT</td>
                    <td>yes</td>
                    <td>no</td>
                    <td>Request body</td>
                    <td>
                      <p>Replace all properties of an instance.</p>
                      <br />
                      <pre>
                        books/:id/{'\n'}
                        {'{"title": "cat run", "author": "lilybon"}'}
                      </pre>
                    </td>
                  </tr>
                  <tr>
                    <td>PATCH</td>
                    <td>no</td>
                    <td>no</td>
                    <td>Request body</td>
                    <td>
                      <p>Update partial properties of an instance.</p>
                      <br />
                      <pre>
                        books/:id/{'\n'}
                        {'{"title": "cat run"}'}
                      </pre>
                    </td>
                  </tr>
                  <tr>
                    <td>DELETE</td>
                    <td>yes</td>
                    <td>no</td>
                    <td>Request body</td>
                    <td>books/:id/</td>
                  </tr>
                  <tr>
                    <td>OPTIONS</td>
                    <td>yes</td>
                    <td>yes</td>
                    <td>-</td>
                    <td>
                      Commonly, it comes up by CORS case, client will send a
                      safe preflight request before sending actual request. It
                      gives server a chance to examine what the actual request
                      will look like before it make.
                    </td>
                  </tr>
                </>
              }
            />
          </Section>
        </ContentWrapper>
      }
    />
  )
}

export default App
