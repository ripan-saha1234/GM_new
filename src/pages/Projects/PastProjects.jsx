import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import ProjectsList from '../../components/ProjectsList/ProjectsList'
import './Projects.css'

const PAST_PROJECTS = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    link: '#',
  },
]

const PastProjects = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Past Projects')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <div className="projects-page">
      <ProjectsList projects={PAST_PROJECTS} />
    </div>
  )
}

export default PastProjects
