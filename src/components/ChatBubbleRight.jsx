import React from 'react'

function ChatBubbleRight({
  message = ''
}) {
  return (
    <>
      <div className="flex justify-end gap-4 mb-4">
        <div
          className=" ml-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
        >
          {message}
        </div>
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </div>

    </>
  )
}

export default ChatBubbleRight