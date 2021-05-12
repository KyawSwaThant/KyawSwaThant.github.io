import './App.css';

function App() {
  return (
    <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img className="rounded-circle" src="/img/profile.jpeg" alt="profile.jpeg" width="300" height="300" />
            </div>
            <div className="col-md">
              <div className="card">
                <h3 className="text-center">Information</h3>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li>Student at University of Computer Studies Mandalay.</li>
                    <li>Beginner Web Developer.</li>
                    <li>Live in Mandalay.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-phone fa-lg"></i>Phone: +959772709300</li>
                        <li><i className="fa fa-envelope fa-lg"></i>Email: admin@kyawswarthant.me</li>
                    </ul>
                </div>
                <div className="col-md">
                    <a className="btn btn-social-icon btn-facebook" href="https://google.com"><i className="fa fa-facebook fa-lg"></i></a>
                    <a className="btn btn-social-icon btn-gmail" href="https://google.com"><i className="fa fa-envelope fa-lg"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="https://google.com"><i className="fa fa-twitter fa-lg"></i></a>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
