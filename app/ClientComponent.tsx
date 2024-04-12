'use client'

import React from "react";

export const context = React.createContext({})

export const ClientComponent: React.FC = () => {
  return (
    <p>My client component</p>
  )
}