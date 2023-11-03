import React from 'react'

function Character() { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [homeworldclass, setHomeworldclass] = usestate('')
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'>
      <h3 className='character-name'>placeholder</h3>
      <p> "Planet: "
        <span className='character-planet'>placeholder</span>
      </p>
    </div>
  )
}

export default Character
