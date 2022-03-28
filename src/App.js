import { useEffect,useState } from 'react';

import './App.css';
import { useWeater } from './contexts/weaterApp';

function App() {
  const [sel, setsel] = useState("İstanbul");
  const {weater,getWeater,setWeater}=useWeater();
  
  
  
  const city = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Adana",
    "Sivas",
    "Antalya",
    "Balıkesir",
    "Çanakkale",
    "Burdur",
    "Mersin",
    "Afyonkarahisar",
    "Ağrı",
    "Kayseri",
    "Yozgat",
    "Yalova",
    "Diyarbakır",
  ];
  console.log(sel)
  useEffect(() => {
    (async () => {
       setWeater(await getWeater(sel));
    })();
  }, [setWeater,sel,getWeater]);
  return (
    <div>
      
      <section className="vh-100" >
     <div className="bar"> 
     <select 
          className="mt-5"
          value={sel}
          onChange={(e) => setsel(e.target.value)}
          name="country"
          id="country"
        >
          {city.map((a, key) => (
            <option key={key} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
       
       
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div
                className="card shadow-0 border border-dark border-5 text-dark"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body p-4">
                  <div className="row text-center">
                    <div
                      className="col-md-9 text-center border-end border-5 border-dark py-4"
                      style={{ marginTop: "-1.5rem", marginBottom: "-1.5rem" }}
                    >
                      <div className="d-flex justify-content-around mt-3">
                        <p className="small"><h4>{sel}</h4></p>
                        <p className="small">{weater[0]?.date}</p>
                      </div>
                      <div className="d-flex justify-content-around align-items-center py-5 my-4">
                        <p
                          className="fw-bold mb-0"
                          style={{ fontSize: "7rem" }}
                        >
                          {parseInt(weater[0]?.max)}°C
                        </p>
                        <div className="text-start">
                          <p className="h3 mb-3"> {weater[0]?.day}</p>
                          <p className="small mb-0">{weater[0]?.status}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around align-items-center mb-3">
                        {weater.map((a, key) => (
                          <div
                            key={key}
                            className="flex-column border"
                            style={{ borderRadius: "10px", padding: ".75rem" }}
                          >
                            <p className="small mb-1">{a.day}</p>
                            <img
                              style={{ width: "50px" }}
                              src={a.icon}
                              alt=""
                            />
                            <p className="small mb-0">
                              <strong>{parseInt(a.max)}°C</strong>
                              
                            </p>
                            <p className="small mb-1">{a.status}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
