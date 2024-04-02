import React from 'react'

function ChatBubbleLeft({
  message = ''
}) {
  return (
    <>
      <div className="flex justify-start gap-4 mb-4">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div
          className="mr-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
        >
          {message}
        </div>
      </div>

    </>
  )
}

export default ChatBubbleLeft