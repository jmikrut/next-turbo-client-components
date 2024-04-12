'use client'

import React from "react";

// Turbo goes boom because of this line
const context = React.createContext({})

export const ClientComponent: React.FC = () => {
  return (
    <p>My client component</p>
  )
}