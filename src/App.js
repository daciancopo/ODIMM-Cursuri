import './App.css';
import star from "./images/Star.png";
import profile1 from "./images/Profile1.png";
import profile2 from "./images/Profile2.png";
import profile3 from "./images/Profile3.png";
import CalendarComponent from "./components/Calendar"

function App() {
  return (
    <div className="container-fluid mt-4 ml-3">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 filtre">
          <div className="mb-4 mt-3">
            <h4 className="mb-4 title ml-2">Cursuri</h4>
            <div className="d-flex">
              <h6 className="mt-2 sort ml-2">Sorteaza dupa :</h6>


              <div className="col-xl-3 col-md-3 col-sm-4 ml-5 bg-white select-style">
                <span className="sup d-flex mt-1">
                  Domeniu
                </span>
                <select
                  className="select-button"
                  value="Antreprenoriat"
                >
                  <option defaultValue="Antreprenoriat">Antreprenoriat</option>
                </select>
              </div>

              <div className="col-lg-3 col-md-2 col-sm-4 ml-5 bg-white select-style">
                <span className="sup d-flex mt-1">
                  Limba
                </span>
                <select
                  className="select-button"
                  value="Romana"
                >
                  <option defaultValue="Romana">Romana</option>
                </select>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-4 ml-5 bg-white select-style">
                <span className="sup d-flex mt-1">
                  Nivel
                </span>
                <select
                  className="select-button"
                  value="Avansat"
                >
                  <option defaultValue="Avansat">Avansat</option>
                </select>
              </div>

            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 ml-4">
          <div className="card calendar p-3">
            <CalendarComponent />
          </div>
          <div className="card ultimele-cursuri-container mt-4">
            <div className="row">

              <p className="title-ultimele-cursuri ml-4 mt-3">Ultimele Cursuri in curand</p>
              <div className="col-lg-10 col-md-8 col-sm-8 ultimele-cursuri ml-4 mt-4 d-flex justify-content-between">
                <div className="align-self-center">
                  <p className="mt-3 nume-lectii">Phasellus consectetur</p>
                  <p className="numar-lectii">120 de lectii</p>
                </div>
                <div className="d-flex justify-content-center align-self-center lectii-button">
                  <button className="button-style">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.17217 7.00072L0.222168 2.05072L1.63617 0.636719L8.00017 7.00072L1.63617 13.3647L0.222168 11.9507L5.17217 7.00072Z" fill="#C7E532" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="col-lg-10 col-md-8 col-sm-8 ultimele-cursuri ml-4 mt-3 d-flex justify-content-between">
                <div className="align-self-center">
                  <p className="mt-3 nume-lectii">Phasellus consectetur</p>
                  <p className="numar-lectii">120 de lectii</p>
                </div>
                <div className="d-flex justify-content-center align-self-center lectii-button-2">
                  <button className="button-style">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.17217 7.00072L0.222168 2.05072L1.63617 0.636719L8.00017 7.00072L1.63617 13.3647L0.222168 11.9507L5.17217 7.00072Z" fill="#E592B1" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="col-lg-10 col-md-8 col-sm-8 ultimele-cursuri ml-4 mt-3 d-flex justify-content-between">
                <div className="align-self-center">
                  <p className="mt-3 nume-lectii">Phasellus consectetur</p>
                  <p className="numar-lectii">120 de lectii</p>
                </div>
                <div className="d-flex justify-content-center align-self-center lectii-button-3">
                  <button className="button-style">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.17217 7.00072L0.222168 2.05072L1.63617 0.636719L8.00017 7.00072L1.63617 13.3647L0.222168 11.9507L5.17217 7.00072Z" fill="#AB93E2" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="col-lg-10 col-md-8 col-sm-8 ultimele-cursuri ml-4 mt-3 d-flex justify-content-between">
                <div className="align-self-center">
                  <p className="mt-3 nume-lectii">Phasellus consectetur</p>
                  <p className="numar-lectii">120 de lectii</p>
                </div>
                <div className="d-flex justify-content-center align-self-center lectii-button-4">
                  <button className="button-style">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.17217 7.00072L0.222168 2.05072L1.63617 0.636719L8.00017 7.00072L1.63617 13.3647L0.222168 11.9507L5.17217 7.00072Z" fill="#C7E532" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-8 col-sm-8 cursuri">
          <div className="row">

            <div className="col-lg-11 col-md-6 col-sm-6 element-curs d-flex mt-4 ml-5">
              <div className="image-style-rec align-self-center">
              </div>
              <div className="row">
                <div className="col-lg-7 col-md-4 col-sm-4 ">
                  <p className="cursuri-title mt-3 ml-4 mb-4">Phasellus consectetur bib endum Phasellus consectetur</p>
                  <p className="cursuri-text ml-4">Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur</p>
                  <div className="d-flex col-lg-4 col-md-4 col-sm-4 star ml-2 mt-4">
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <p className="ml-4 nota">5.0</p>
                  </div>
                </div>
                <div className="separator mt-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4 d-flex">
                  <div>
                    <img className="mt-4 ml-4" src={profile1} alt="Profile1"></img>
                  </div>
                  <div className="row ml-5 mt-4">

                    <p className="profile-title">Trainer: Rev Shawn</p>

                    <p className="profile-text">Expert in domeniu,<br></br> de 10 ani</p>

                    <button className="inscriere">Inscrie-te</button>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-11 col-md-6 col-sm-6 element-curs d-flex mt-4 ml-5">
              <div className="image-style-laptop align-self-center">
              </div>
              <div className="row">
                <div className="col-lg-7 col-md-4 col-sm-4 ">
                  <p className="cursuri-title mt-3 ml-4 mb-4">Phasellus consectetur bib endum Phasellus consectetur</p>
                  <p className="cursuri-text ml-4">Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur</p>
                  <div className="d-flex col-lg-4 col-md-4 col-sm-4 star ml-2 mt-4">
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <p className="ml-4 nota">5.0</p>
                  </div>
                </div>
                <div className="separator mt-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4 d-flex">
                  <div>
                    <img className="mt-4 ml-4" src={profile2} alt="Profile2"></img>
                  </div>
                  <div className="row ml-5 mt-4">

                    <p className="profile-title">Trainer: Rev Shawn</p>

                    <p className="profile-text">Expert in domeniu,<br></br> de 10 ani</p>

                    <button className="inscriere">Inscrie-te</button>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-11 col-md-6 col-sm-6 element-curs d-flex mt-4 ml-5">
              <div className="image-style-humans align-self-center">
              </div>
              <div className="row">
                <div className="col-lg-7 col-md-4 col-sm-4 ">
                  <p className="cursuri-title mt-3 ml-4 mb-4">Phasellus consectetur bib endum Phasellus consectetur</p>
                  <p className="cursuri-text ml-4">Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur. Phasellus consectetur bib endum Phasellus consectetur</p>
                  <div className="d-flex col-lg-4 col-md-4 col-sm-4 star ml-2 mt-4">
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <img src={star} alt="Star"></img>
                    <p className="ml-4 nota">5.0</p>
                  </div>
                </div>
                <div className="separator mt-4"></div>
                <div className="col-lg-4 d-flex">
                  <div>
                    <img className="mt-4 ml-4" src={profile3} alt="Profile3"></img>
                  </div>
                  <div className="row ml-5 mt-4">

                    <p className="profile-title">Trainer: Rev Shawn</p>

                    <p className="profile-text">Expert in domeniu,<br></br> de 10 ani</p>

                    <button className="inscriere">Inscrie-te</button>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
