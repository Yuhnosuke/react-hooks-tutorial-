import React, {useEffect, useState} from 'react';

const Example = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
