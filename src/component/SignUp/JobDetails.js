import React, { Component } from 'react'
import NavBar from '../NavBar';

export default class JobDetails extends Component {
    onSubmitDetails = e => {
        e.preventDefault();
        this.props.onClick();
        if (!this.canSubmitData()) {
            return
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    canSubmitData = () => {
        const { values: { jobRole, department } } = this.props;
        return jobRole.length > 7 && department.length > 5;
    }
    render() {
        const { values: { jobRole, department, formErrors }, onChange } = this.props;
        const isEnabled = this.canSubmitData();

        return (
            <React.Fragment>
                <NavBar />
                <section className="sign-up">
                    <form onSubmit={this.onSubmitDetails} className="shadow-5 align" action="sign-up_submit" method="post" noValidate acceptCharset="utf-8">
                        <h1>Job Details</h1>
                        <div>
                            <div className="tl"><label htmlFor="jobRole">Job Role</label>
                                <input className={formErrors.jobRole.length > 0 ? "error" : null} type="text" noValidate
                                    name="jobRole" id="jobRole" placeholder="Job Role" value={jobRole} onChange={onChange} />
                                {formErrors.jobRole.length > 0 && (<small className="error-message">{formErrors.jobRole}</small>)}
                            </div>
                            <div className="tl"><label htmlFor="department">Department</label>
                                <input className={formErrors.department.length > 0 ? "error" : null} type="text" noValidate
                                    name="department" id="department" placeholder="Department" value={department} onChange={onChange} />
                                {formErrors.department.length > 0 && (<small className="error-message">{formErrors.department}</small>)}
                            </div>
                            <button className="btn" onClick={this.back}>Back</button>
                            <button className="btn" disabled={!isEnabled} type="submit">Submit</button>
                        </div>
                    </form>
                </section>
            </React.Fragment >
        )
    }
}
