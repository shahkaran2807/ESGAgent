import MessageForm from 'components/MessageForm'
import { NextPage } from 'next'
import Navbar from 'components/Navbar'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="fixed bottom-0 right-0 left-0">
        <MessageForm />
      </div>
    </div>
  )
}

export default IndexPage
