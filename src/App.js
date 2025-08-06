import React, { useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () =>  {
  const pageSize = 5;

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
            <Navbar/>
           
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
            onLoaderFinished={() => () => setProgress(0)}
          />  

            <Switch>
            <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" /></Route>
            <Route exact path="/Business"><News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business" /></Route>
            <Route exact path="/Entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment"/></Route>
            <Route exact path="/General"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" /></Route>
            <Route exact path="/Health"><News setProgress={setProgress}  key="health" pageSize={pageSize} country="us" category="health" /></Route>
            <Route exact path="/Science"><News setProgress={setProgress}  key="science" pageSize={pageSize} country="us" category="science" /></Route>
            <Route exact path="/Sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" category="sports" /></Route>
            <Route exact path="/Technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" category="technology" /></Route>

            </Switch>
        </Router>
      </div>
    )
}

export default App;