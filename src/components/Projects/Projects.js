import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <p className='project__paragraph'>
        These are only 3 projects that i am showcasing in my protfolio, the rest
        of the projects (more than 20) are available on my{' '}
        <a
          href='https://github.com/darkoilievski'
          target='_blank'
          rel='noreferrer'
        >
          GitHub page
        </a>
      </p>
    </section>
  )
}

export default Projects
