import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'

const MessageForm = () => {
  const [content, setContent] = useState('')
  // const { addMessage } = useMessages()
  const [resp, setResp] = useState('')
  const [loading, setloading] = useState(false)

  // const handleSubmit = async (e?: any) => {
  //   e?.preventDefault()
  //   addMessage(content)
  //   setContent('')

  const postDataToApi = async () => {
    try {
      // const response = await fetch('http://127.0.0.1:5000', {
      const response = await fetch('https://ks2349.pythonanywhere.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: content }) // Convert postData object to JSON string
      })
      const result = await response.json()
      console.log('Response from API:', result.response)
      setResp(result.response)
      setContent('')
      setloading(false)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    setloading(true)
    setResp('')
    postDataToApi()

    // run();
  }

  const convertTextToHTML = (text: any) => {
    // Regular expression to find URLs
    const urlRegex = /(https?:\/\/[^\s)]+)/g
    // Split text into parts separated by URLs
    const parts = text.split(urlRegex)
    // Map each part to either a text node or a link node
    const elements = parts.map((part: any, index: any) => {
      if (part.match(urlRegex)) {
        // If part is a URL, return a link node
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue' }}
          >
            {part}
          </a>
        )
      } else {
        // If part is not a URL, return a text node
        return <span key={index}>{part}</span>
      }
    })
    // Return the array of elements
    return elements
  }

  return (
    <div>
      {!loading ? (
        <div className=" flex justify-center items-center">
          <div className="bg-orange-50 shadow-lg rounded-lg p-6 lg:m-8 mt-8 whitespace-pre-wrap">
            {convertTextToHTML(resp.replace(/\*\*(.*?)\*\*/g, '$1'))}
          </div>
        </div>
      ) : (
        <div>
          <div className="min-h-screen flex justify-center items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}

      <form className="relative mx-auto max-w-3xl rounded-t-xl" onSubmit={handleSubmit}>
        <div className=" border-gray-200 h-[130px] rounded-t-xl backdrop-blur border-t border-l border-r border-gray-500/10 dark:border-gray-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 p-5">
          <label htmlFor="content" className="sr-only">
            Your message
          </label>
          <TextArea
            name="content"
            placeholder="Enter the company name here"
            rows={3}
            value={content}
            autoFocus
            className="!p-3 text-gray-900 border-0 ring-1 dark:ring-0 ring-gray-300/40 focus:ring-gray-300/80 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800/80 backdrop-blur shadow-none"
            onChange={(e: any) => setContent(e.target.value)}
          />
          <div className="absolute right-8 bottom-10">
            <div className="flex space-x-3">
              <Button className="" type="submit" size="small">
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
