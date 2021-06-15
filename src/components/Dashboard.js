import React, { Component } from 'react'
import CreateProjectButton from './project/CreateProjectButton'
import ProjectItem from './project/ProjectItem'
import { connect } from 'react-redux'
import { getProjects } from '../actions/projectActions'
import ProtoType from 'prop-types'
class Dashboard extends Component {

    componentDidMount() {
        this.props.getProjects()
    }
    renderProjectsList = () => {
        return this.props.project.projects.map(project => {
           return (
               <div>
                <ProjectItem project={project} />
               </div>
           ) 
        })
    }
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />
                            {this.renderProjectsList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.protoType = {
    project: ProtoType.object.isRequired,
    getProjects: ProtoType.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        project: state.project
    }
}
export default connect(mapStateToProps,{getProjects})(Dashboard)
