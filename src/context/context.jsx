import React, { createContext, useContext, useState } from 'react'

const PageContext = createContext()

export const usePageContext = () => {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider')
  }
  return context
}

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('homepage')
  const [pageTitle, setPageTitle] = useState('')
  const [headerBackground, setHeaderBackground] = useState('/header-bg.svg')

  const updatePage = (pageName) => {
    setCurrentPage(pageName)
  }

  const updatePageTitle = (title) => {
    setPageTitle(title)
  }

  const updateHeaderBackground = (url) => {
    setHeaderBackground(url || '/header-bg.svg')
  }

  return (
    <PageContext.Provider
      value={{
        currentPage,
        updatePage,
        pageTitle,
        updatePageTitle,
        headerBackground,
        updateHeaderBackground,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
