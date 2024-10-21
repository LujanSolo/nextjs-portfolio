import ProjectsLayout from './ProjectsLayout';

const ProjectList = ({projects}) => {
  return (
    <div> 
      {
        projects.map((project, index) => {
          return <ProjectsLayout key={index} {...project} />
        })
      }
    </div>
  )
}

export default ProjectList;