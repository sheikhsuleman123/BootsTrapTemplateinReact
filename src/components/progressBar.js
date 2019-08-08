import React, { Component } from 'react';

export default class ProgressBar extends Component {
  render() {
    return (
      <section className="p-5">
          <div className="container-fluid">
              <div className="row">
                  <div className="col text-center mb-3">
                    <h1 className="display-2 text-warning">Progress</h1>
                  <p className="lead text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus culpa cumque laudantium? Ea perspiciatis consectetur quod omnis et sit corrupti ducimus itaque repudiandae consequatur nostrum tenetur, quibusdam veniam ab!
                  </p>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-sm-10 col-lg-6 text-secondary">
                    <h2>HTML</h2>
                    <div className="progress bg-secondary mb-3">
                        <div className="progress-bar" style={{width:'50%'}}>
                        50%
                        </div>
                    </div>
                    <h2>CSS</h2>
                    <div className="progress mb-3">
                        <div className="progress-bar  bg-danger" style={{width:'70%'}}>
                        70%
                        </div>
                    </div>
                    <h2>JavaScript</h2>
                    <div className="progress bg-secondary mb-3">
                        <div className="progress-bar bg-warning" style={{width:'80%'}}>
                        80%
                        </div>
                    </div>
                    <h2>BootsTrap</h2>
                    <div className="progress bg-secondary mb-3">
                        <div className="progress-bar  bg-success" style={{width:'90%'}}>
                        90%
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
