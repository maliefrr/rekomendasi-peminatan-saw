

const Login = () => {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card  text-white login-card" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <form action="/login" method="post">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typeEmailX">
                      Username
                    </label>
                    <input type="text" id="typeEmailX" className="form-control form-control-lg" name="username" />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" name="password" />
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5 btn-login" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
