'use client'

import React from "react";

export const ClientComponent: React.FC = () => {
  const [someState, setSomeState] = React.useState(false)

  return (
    <React.Fragment>
      <h4>My client component</h4>
      <p>State value: {someState}</p>
    </React.Fragment>
  )
}